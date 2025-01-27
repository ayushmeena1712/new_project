import 'dotenv/config'; 
import connectDB from './db/connect.js';
import {app} from "./app.js"


console.log(process.env.MONGODB_URI + "hello");
connectDB()
.then(() => {
      app.listen(process.env.PORT, () => {
          console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      })
      app.get("/login", (req, res) => {
        const data = req.body;
        console.log(data);
        res.status(200).json(data);
      })
  })
  .catch((err) => {
      console.log("MONGO db connection failed !!! ", err);
  }) 