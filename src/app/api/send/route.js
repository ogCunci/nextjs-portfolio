import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const data= req.json();
  const { email, subject, message } = data;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["bolykydani@gmail.com", email],
      subject: subject,
      html: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json({ message: "Message sent!" });
  } catch (error) {
    console.error(error);
  }
}
