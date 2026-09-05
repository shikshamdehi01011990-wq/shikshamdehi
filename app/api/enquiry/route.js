export async function POST(request) {
  try {
    const data = await request.json();

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return Response.json(
        {
          success: false,
          error: "Google Script URL is not configured."
        },
        { status: 500 }
      );
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await response.json();

    if (!result.success) {
      return Response.json(
        {
          success: false,
          error: result.error || "Google Sheet submission failed."
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true
    });

  } catch (error) {
    console.error("Enquiry API Error:", error);

    return Response.json(
      {
        success: false,
        error: "Unable to submit enquiry. Please try again."
      },
      { status: 500 }
    );
  }
}
