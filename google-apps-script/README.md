# Google Sheets & Apps Script Integration Guide for ORVYS

Every submission from the website ("Start a Conversation" pop-up modal and Contact Page) will automatically append a new row in your **Google Sheet** and auto-email **coms@orvys.in**!

---

## 30-Second Setup Instructions

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new).
2. Name the sheet **"ORVYS Consulting Inquiries"**.
3. In **Row 1**, set these column headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Designation`
   - **D1**: `Organization`
   - **E1**: `Email`
   - **F1**: `Phone`
   - **G1**: `Area of Interest`
   - **H1**: `Message`

---

### Step 2: Paste the Apps Script Code
1. In Google Sheets, click **Extensions** > **Apps Script** in the top bar.
2. Erase any code inside `Code.gs`.
3. Copy and paste the code from [`google-apps-script/Code.gs`](file:///Users/yash/Documents/Developer/ORVYS/google-apps-script/Code.gs).

---

### Step 3: Deploy as Web App
1. Click **Deploy** (top right) > **New deployment**.
2. Select type: **Web app** (click the gear icon ⚙ next to "Select type").
3. Set **Description**: `ORVYS Contact Form Web App`.
4. Set **Execute as**: `Me`.
5. Set **Who has access**: `Anyone` (**Crucial for receiving web submissions**).
6. Click **Deploy**.
7. Grant required permissions when prompted.
8. Copy the generated **Web App URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Add to `.env.local`
In your project folder (`ORVYS`), create a file named `.env.local` and add:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec
```

Now every form submission will:
1. Log automatically into your Google Sheet.
2. Auto-send an email notification to `coms@orvys.in`.
