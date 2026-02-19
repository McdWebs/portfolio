import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: true,
  }),
);
app.use(express.json());

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.warn(
    "[contact-server] RESEND_API_KEY is not set. Email sending will fail until you configure it in your .env file.",
  );
}

const resend = new Resend(apiKey);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mcdwebs4135@gmail.com",
      replyTo: email,
      subject: `New message from ${name || "Portfolio visitor"}`,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("[contact-server] Failed to send email via Resend:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[contact-server] Listening on http://localhost:${PORT}`);
});

