const express=require('express');
const app=express()
const PORT=6000
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB=require('./config/db')

dotenv.config();

connectDB();
 
app.use(cors());
app.use(express.json());
 
app.use('/auth',require('./routes/authRoute'))
app.listen(PORT,()=>{
  console.log(`server is running at ${PORT}`)
})