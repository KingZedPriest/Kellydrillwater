//Templates
import NotificationTemplate from "../../../../email/NotifyTemplate";
import QuoteTemplate from "../../../../email/QuoteTemplate";

//Needed Utils and Lib
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { subject, emailType, name, email, message, state, address, description } = body;

    if (!subject || !emailType) throw new Error('Fill in the fields')

    let emailHtml;

    switch (emailType) {

      case "notification":
        emailHtml = render(NotificationTemplate({ name, email, message }));
        break;

      case "quote":
        emailHtml = render(QuoteTemplate({ state, email, address, description }));
        break;

      default:
        throw new Error('Invalid emailType');
    }

    await sendEmail({
      to: process.env.RECEIVING_EMAIL!,
      subject,
      html: emailHtml,
    });

    return new NextResponse('Email Send Successfully', { status: 200 })

  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message);
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
}