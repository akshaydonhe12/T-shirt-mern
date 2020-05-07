const monggose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: String,
    price: String
});

const ProductCart = mongoose.model("ProductCart",ProductCartSchema);


const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    update: Date,
    user:{
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true}
);

const order = mongoose.model("Order",OrderSchema);

module.exports = {Order,ProductCart};