const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// حماية HTTP Headers
app.use(helmet());

// منع كثرة الطلبات بشكل مبالغ فيه
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "طلبات كثيرة، حاول بعد قليل."
  }
});

app.use(limiter);

// قراءة JSON بحجم محدود
app.use(express.json({ limit: "100kb" }));

// ملفات الموقع
app.use(express.static(path.join(__dirname, "public")));

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// حالة السيرفر
app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    project: "Ayoub DZ University"
  });
});

// أي صفحة غير موجودة
app.use((req, res) => {
  res.status(404).json({
    error: "الصفحة غير موجودة"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log(" Ayoub DZ University");
  console.log(` http://localhost:${PORT}`);
  console.log(" Protection: Helmet + Rate Limit");
  console.log("=================================");
});
