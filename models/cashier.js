const mongoose = require('mongoose');
const { Schema } = mongoose;

const CashSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    emailAddress: { type: String, required: true },
    rol: { type: String, required: true },
    status: { type: String, required: true },
    gender: { type: String, required: true }
});

module.exports = mongoose.model('Cashier', CashSchema);