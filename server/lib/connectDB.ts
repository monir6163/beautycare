import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  const uri = `mongodb+srv://`;

  try {
    await mongoose.connect(uri);
    console.log("Connected to Beautycutie database");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
