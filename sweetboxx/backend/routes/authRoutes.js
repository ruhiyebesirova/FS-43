const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Sadə Qeydiyyat (Register) API-ı
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // İstifadəçinin daha öncə qeydiyyatdan keçib-keçmədiyini yoxlayırıq
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'Bu e-mail artıq istifadə olunub!' });
    }

    // Yeni istifadəçi yaradırıq
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'Qeydiyyat uğurla tamamlandı! 🎉' });
  } catch (error) {
    console.error("Qeydiyyat Xətası:", error);
    res.status(500).json({ success: false, message: 'Qeydiyyat zamanı xəta baş verdi.' });
  }
});

// Sadə Giriş (Login) API-ı
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: 'E-mail və ya şifrə yanlışdır!' });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Sistemə uğurla giriş edildi! 🚀',
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    console.error("Giriş Xətası:", error);
    res.status(500).json({ success: false, message: 'Giriş zamanı xəta baş verdi.' });
  }
});

// EXPRESS-Ə BU ROUTER-İ İXRAZ EDİRİK
module.exports = router;