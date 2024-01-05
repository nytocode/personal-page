const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { email, message, first_name, last_name } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["admin@creativecoder.io"],
      subject: `${first_name} ${last_name} <${email}>`,
      text: message,
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
