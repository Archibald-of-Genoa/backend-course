import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";



const PORT = 5002;
const DB_URL = `mongodb+srv://user:user@cluster0.wol1i.mongodb.net/`;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
