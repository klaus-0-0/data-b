import express from 'express';
import connectDB from './connectDB.js';
import Item from './Item.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).send(err);
  }
});


// app.get('/api/data1', (req, res) => {
//   res.json([{
//     id: 1,
//     username: "klaus",
//     email: "shhd",
//     password: "123"
//   },
//   {
//     id: 2,
//     username: "klaus",
//     email: "shhd",
//     password: "123"
//   }]);
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
