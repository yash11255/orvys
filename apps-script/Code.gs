/**
 * Orvys website → Google Sheets
 * Receives form submissions from the website and appends them to a tab
 * named after the form: "Enquiries", "Partnerships", "Report Downloads", "Newsletter".
 * Tabs and header columns are created automatically.
 *
 * Setup: see SETUP.md in the website folder.
 */

// Optional: an email address to notify on every new submission (leave "" to disable).
var NOTIFY_EMAIL = "";

// Only these tab names are accepted (prevents arbitrary sheet creation).
var ALLOWED_FORMS = ["Enquiries", "Partnerships", "Report Downloads", "Newsletter"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var p = (e && e.parameter) || {};
    var formType = ALLOWED_FORMS.indexOf(p.formType) >= 0 ? p.formType : "Enquiries";

    // Basic spam guard: ignore if the hidden honeypot field was filled.
    if (p.website) return json_({ ok: true });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(formType) || ss.insertSheet(formType);

    // Build/extend the header row from incoming fields.
    var fields = Object.keys(p).filter(function (k) { return k !== "formType" && k !== "website"; });
    var lastCol = sheet.getLastColumn();
    var headers = lastCol ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];
    if (headers.length === 0) {
      headers = ["Received At"];
    }
    fields.forEach(function (f) { if (headers.indexOf(f) < 0) headers.push(f); });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers])
      .setFontWeight("bold").setBackground("#0e1a29").setFontColor("#ffffff");
    sheet.setFrozenRows(1);

    var row = headers.map(function (h) {
      if (h === "Received At") return new Date();
      var v = p[h] == null ? "" : String(p[h]);
      // Prevent spreadsheet formula injection.
      return /^[=+\-@]/.test(v) ? "'" + v : v.slice(0, 5000);
    });
    sheet.appendRow(row);

    if (NOTIFY_EMAIL) {
      var body = fields.map(function (f) { return f + ": " + p[f]; }).join("\n");
      MailApp.sendEmail(NOTIFY_EMAIL, "New website submission: " + formType, body);
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Visit the web app URL in a browser to confirm it is live.
function doGet() {
  return json_({ ok: true, service: "Orvys forms" });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
