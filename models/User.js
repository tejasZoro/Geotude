const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For hashing passwords

// Define the User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving it
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  // Hash the password before saving
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
