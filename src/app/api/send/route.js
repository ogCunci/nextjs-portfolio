import { Resend } from "resend";
const resend = new Resend("re_J9rk1M6J_2FCtbxK2ggXRUCev9BPnyuNt");

export default async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["bolykydani@gmail.com"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
