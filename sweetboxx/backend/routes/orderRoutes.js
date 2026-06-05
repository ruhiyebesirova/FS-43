const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const nodemailer = require('nodemailer');

// Sifariş yaratmaq və Mail göndərmək API-ı
router.post('/send-box', async (req, res) => {
  try {
    const { senderEmail, receiverEmail, selectedBox, selectedSweets, message, totalPrice } = req.body;

    // 1. Məlumatları MongoDB Atlas-a qeyd edirik
    const newOrder = new Order({
      senderEmail,
      receiverEmail,
      selectedBox,
      selectedSweets,
      message,
      totalPrice
    });
    const savedOrder = await newOrder.save();

    // 2. Nodemailer ilə Real Mail Göndərilməsi
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Şirniyyatların siyahısını HTML formata salırıq
    const sweetsList = selectedSweets.map(s => `<li>${s.name} (${s.weight || 'Ölçü qeyd edilməyib'})</li>`).join('');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: receiverEmail,
      subject: 'Sizə xüsusi bir SweetBox hədiyyə göndərildi! 🎁',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #DE3B6A; border-radius: 15px; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #DE3B6A; text-align: center;">Sürpriz Hədiyyə! 🎉</h2>
          <p><strong>${senderEmail}</strong> adlı istifadəçi sizə özəl olaraq <strong>${selectedBox.name}</strong> hazırladı.</p>
          
          <div style="background-color: #FFF5F5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p style="margin: 0; font-style: italic; color: #555;">" ${message} "</p>
          </div>

          <h4 style="color: #2B2B2B; margin-bottom: 5px;">Qutunun içindəkilər:</h4>
          <ul style="padding-left: 20px; color: #4B5563;">
            ${sweetsList}
          </ul>

          <p style="font-size: 11px; color: #9CA3AF; text-align: center; margin-top: 25px;">
            SweetBox virtual çatdırılma platforması vasitəsilə göndərilmişdir.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      success: true, 
      message: 'Məlumatlar bazaya yazıldı və real mail uğurla göndərildi!',
      data: savedOrder 
    });

  } catch (error) {
    console.error("Sifariş Xətası:", error);
    res.status(500).json({ success: false, message: 'Serverdə xəta baş verdi!' });
  }
});

// EXPRESS-Ə BU ROUTER-İ İXRAZ EDİRİK
module.exports = router;