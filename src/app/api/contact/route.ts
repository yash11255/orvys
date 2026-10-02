import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      process.env.GOOGLE_SCRIPT_URL ||
      'https://script.google.com/macros/s/AKfycbwGqdhb74HwJrU1F2IKk6hx9gAwQaHc3XRijGxmp07mE3RGsoPJAbZTnzupX0WO9HSR_A/exec';

    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      } catch (err) {
        console.warn('Google Script forward error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Consulting brief received and dispatched to coms@orvys.in',
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry submission' },
      { status: 500 }
    );
  }
}
