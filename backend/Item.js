import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
