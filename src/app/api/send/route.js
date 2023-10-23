import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const data = await req.json();
  console.log(data)

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: "bolykydani@gmail.com",
      subject: data.subject,
      react: (
        <>
          <h3>{`Message from: ${data.email}`}</h3>
          <p>{data.message}</p>
        </>
      ),
    });
    console.log(response);
    return Response.json({ message: "Message sent!" });
  } catch (error) {
    console.error(error);
  }
}
