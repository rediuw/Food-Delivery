import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Rediet:RedietBirhanu40@cluster0.fsrkgpm.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}