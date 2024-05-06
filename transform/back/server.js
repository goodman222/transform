import express from "express";
import ViteExpress from "vite-express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

//отправляем письмо
async function sendEmail(data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "markhrabryi@mail.ru",
      pass: "s7rH4tRcfcr140G88bJY",
    },
  });

  // console.log(transporter);

  let result = await transporter.sendMail({
    from: '"Трансформация" <markhrabryi@mail.ru>',
    to: "mark.hrabryi90@gmail.com",
    subject: "Новая заявка с сайта",
    html: data,
  });
  console.log(`result-----------------------: ${result.response}`);
  return result;
}

//принимаем сигнал и данные для отправки письма
app.post("/sendEmail", async (req, res) => {
  const message = `<h1>Новая заявка с сайта!</h2>
  <ul>
    <li>Имя: ${req.body.name}</li>
    <li>Номер телефона: ${req.body.number}</li>
    <li>Электронная почта: ${req.body.email}</li>
    <li>Выбранная программа: ${req.body.tariff}</li>
  </ul>
  `;

  const resSend = await sendEmail(message);
  console.log("end ------------------");
  console.log(resSend);
  res.send(resSend.response.slice(0, 2));
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
