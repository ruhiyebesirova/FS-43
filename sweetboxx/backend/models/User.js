const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'İstifadəçi adı mütləqdir'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'E-mail ünvanı mütləqdir'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Zəhmət olmasa düzgün e-mail ünvanı daxil edin'
    ]
  },
  password: {
    type: String,
    required: [true, 'Şifrə mütləqdir'],
    minlength: [6, 'Şifrə ən azı 6 simvoldan ibarət olmalıdır']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);