const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-box', async (req, res) => {
  try {
    const { senderEmail, receiverEmail, selectedBox, selectedSweets, message, totalPrice } = req.body;

    console.log("🎁 Yeni Sifariş Gəldi:", { senderEmail, receiverEmail, totalPrice });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const sweetsList = selectedSweets.map(s => `<li>${s.name}</li>`).join('');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: receiverEmail,
      subject: 'Sizə xüsusi bir SweetBox hədiyyə göndərildi! 🎁',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #DE3B6A; border-radius: 15px; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #DE3B6A; text-align: center;">Sürpriz Hədiyyə! 🎉</h2>
          <p><strong>${senderEmail}</strong> adlı istifadəçi sizə özəl olaraq xüsusi bir qutu hazırladı.</p>
          <div style="background-color: #FFF5F5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p style="margin: 0; font-style: italic; color: #555;">" ${message} "</p>
          </div>
          <h4>Qutunun içindəkilər:</h4>
          <ul>${sweetsList}</ul>
          <p><strong>Ümumi Qiymət:</strong> ${totalPrice} AZN</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      success: true, 
      message: 'Real mail uğurla göndərildi!' 
    });

  } catch (error) {
    console.error("Sifariş Xətası:", error);
    res.status(500).json({ success: false, message: 'Serverdə xəta baş verdi!' });
  }
});

module.exports = router;