import mongoose from "mongoose";

export const dbConnect = async () => {
  try {    
    const dbConn = await mongoose.connect(process.env.MONGO_URL);
    if(dbConn)console.log('Database Connected');
    return true;
  } catch (error) {
    console.log("error connecting database");
  }
};
