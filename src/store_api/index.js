const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successfull!'))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);
app.use(morgan('tiny'));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Backend server is running! in port: ' + port);
});
