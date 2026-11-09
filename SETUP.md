# Orvys website: setup

## Site structure

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| What We Do | `what-we-do.html` |
| Partner With Us (partnership form) | `partner.html` |
| Insights (report download form) | `insights.html` |
| Contact (enquiry form) | `contact.html` |

Edit pages in `src/pages/`, and the shared header and footer in `src/_layout.html`. Then rebuild:

```bash
python3 build.py
```

## Connect the forms to Google Sheets (about 5 minutes)

All four forms (Enquiries, Partnerships, Report Downloads, Newsletter) save to one Google Sheet. Each form gets its own tab.

1. Create a new Google Sheet, for example "Orvys Website Leads".
2. In the Sheet, open **Extensions → Apps Script**.
3. Delete the sample code, paste in everything from `apps-script/Code.gs`, and click **Save**.
   - Optional: set `NOTIFY_EMAIL` to receive an email for each new submission.
4. Click **Deploy → New deployment** → the gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, then authorise the script with your Google account.
6. Copy the **Web app URL** (it ends in `/exec`).
7. Paste it into `assets/config.js`:
   ```js
   window.ORVYS_SHEET_URL = "https://script.google.com/macros/s/XXXX/exec";
   ```
8. Submit a test form on the site. A new row appears in the matching tab.

If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## Go live

Upload the whole folder to any static host, such as Netlify, Vercel, GitHub Pages or cPanel hosting. The `src/`, `apps-script/` and `build.py` files do not need to be public.

## Photo credits

The photos are from Wikimedia Commons under CC BY-SA licences, and are credited in the site footer. Keep those credits, or replace the photos with your own.
