/**
 * ORVYS Consulting - Google Sheets Apps Script Integration
 * Target Recipient: coms@orvys.in
 *
 * HOW TO SETUP IN GOOGLE SHEETS (30 SECONDS):
 * 1. Open your Google Sheet.
 * 2. Create column headers in Row 1:
 *    A1: Timestamp | B1: Name | C1: Designation | D1: Organization | E1: Email | F1: Phone | G1: Area of Interest | H1: Message
 * 3. Click Extensions > Apps Script in the Google Sheets top menu.
 * 4. Erase any code in the editor, copy & paste this entire script into Code.gs.
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Select Type: "Web app".
 * 7. Set Description: "ORVYS Contact Form Web App".
 * 8. Set Execute as: "Me".
 * 9. Set Who has access: "Anyone" (CRITICAL for receiving form submissions).
 * 10. Click "Deploy", authorize permissions, and copy the Web App URL!
 * 11. Add the Web App URL to your .env.local file as:
 *     NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};

    // Parse JSON body or form payload
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date();
    var name = data.name || 'N/A';
    var designation = data.designation || 'N/A';
    var organization = data.organization || 'N/A';
    var email = data.email || 'N/A';
    var phone = data.phone || 'N/A';
    var areaOfInterest = data.areaOfInterest || 'CSR Strategy & Ground Implementation';
    var message = data.message || 'N/A';

    // 1. Append record to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      designation,
      organization,
      email,
      phone,
      areaOfInterest,
      message
    ]);

    // 2. Auto-send Email Notification to coms@orvys.in
    var recipientEmail = "coms@orvys.in";
    var emailSubject = "New ORVYS Consulting Brief from " + name + " (" + organization + ")";
    var emailBody = 
      "NEW CONSULTING INQUIRY RECEIVED\n" +
      "-----------------------------------------\n" +
      "Submitted At: " + timestamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + "\n\n" +
      "Full Name: " + name + "\n" +
      "Designation: " + designation + "\n" +
      "Organization / Department: " + organization + "\n" +
      "Official Email: " + email + "\n" +
      "Contact Phone: " + phone + "\n" +
      "Area of Interest: " + areaOfInterest + "\n\n" +
      "Strategic Mandate / Program Challenge:\n" +
      message + "\n\n" +
      "-----------------------------------------\n" +
      "Automated Transmission via ORVYS Google Sheets Integration";

    try {
      MailApp.sendEmail(recipientEmail, emailSubject, emailBody);
    } catch (mailErr) {
      Logger.log("MailApp error: " + mailErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", recipient: "coms@orvys.in" }))
    .setMimeType(ContentService.MimeType.JSON);
}
