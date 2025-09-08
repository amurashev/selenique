import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

// import path from "path";

const KEY = process.env.RESEND_API_KEY;
const EMAIL = process.env.RESEND_EMAIL || "";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const text = searchParams.get("text");

  return NextResponse.json({ data: { text } });
}

type PostData = {
  type: "ii_photo_common" | "consultation" | "ii_model"
  name: string;
  contact: string;
  source: string;
  count: string;
  time: string;
  details: string;
  hasModel: string;
  file: File;
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const data: PostData = {
    type:
      (formData.get("type") as PostData["type"]) || ("ii_photo_common" as const),
    name: formData.get("name") as string,
    contact: formData.get("contact") as string,
    source: formData.get("source") as string,
    count: formData.get("count") as string,
    time: formData.get("time") as string,
    details: formData.get("details") as string,
    hasModel: formData.get("has_model") as string,
    file: formData.get("file") as File,
  };

  const resend = new Resend(KEY);

  const attachments = [];

  if (data.file) {
    const buffer = Buffer.from(await data.file?.arrayBuffer());
    // const filePath = path.join(
    //   process.cwd(),
    //   "public",
    //   "uploads",
    //   data.file.name
    // );
    attachments.push({
      content: buffer,
      filename: data.file.name,
    });
  }

  let subject = "Selenique: ";
  let html = "";

  if (data.type === "ii_photo_common") {
    subject = "Selenique: Заявка на обработку фотографии";
    html = `<div>
      <ul>
        <li><b>Имя:</b> ${data.name}</li>
        <li><b>Контакт:</b> ${data.contact}</li>
        <li><b>Для чего:</b> ${data.source}</li>
        <li><b>ИИ Модель:</b> ${data.hasModel}</li>
        <li><b>Количество:</b> ${data.count}</li>
        <li><b>Срок:</b> ${data.time}</li>
      </ul>
      <p>${data.details}</p>
      </div>`;
  }
  
  if (data.type === "ii_model") {
    subject = "Selenique: Заявка на обработку фотографии: ИИ Модель";
    html = `<div>
      <ul>
        <li><b>Имя:</b> ${data.name}</li>
        <li><b>Контакт:</b> ${data.contact}</li>
        <li><b>Для чего:</b> ${data.source}</li>
        <li><b>Количество:</b> ${data.count}</li>
        <li><b>Срок:</b> ${data.time}</li>
      </ul>
      <p>${data.details}</p>
      </div>`;
  }

  if (data.type === "consultation") {
    subject = "Selenique: Заявка на консультацию";
    html = `<div>
    <ul>
      <li><b>Имя:</b> ${data.name}</li>
      <li><b>Контакт:</b> ${data.contact}</li>
    </ul>
    <p>${data.details}</p>
    </div>`;
  }

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: EMAIL as string,
    subject: subject,
    attachments,
    html,
  });

  return NextResponse.json({
    data,
    result,
  });
}
