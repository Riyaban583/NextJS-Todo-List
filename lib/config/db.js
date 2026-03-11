import mongoose from "mongoose";

const ConnectDb = async () => {
  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/Todo-app");

    console.log("DB Connected");

  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};

export default ConnectDb;