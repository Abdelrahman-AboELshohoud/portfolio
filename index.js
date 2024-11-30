import express from "express";
import { sendEmail } from "./mail-me.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const __dirname = path.resolve();
const app = express();
app.use(express.json());

app.post("/api/mail-me", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  try {
    await sendEmail(email, name, email, message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
