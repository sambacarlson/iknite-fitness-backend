import express from "express";
import mongoose from "mongoose";
import exerciseRouter from "./routes/exerciseRoutes";
import categoryRouter from "./routes/categoryRoutes";


const app = express();

//connect to db and listen to changes
const dbURI = 'mongodb+srv://testuser:test1234@iknitefitness.v54f9yl.mongodb.net/iknite-fitness?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(() => {
    app.listen(3000);
    //TODO: remove console.log
    console.log('listening on 3000');
  })
  .catch(error => {
    //TODO: handle error
    console.log(error.message);
  });

  //routes
  app.use('/categories', categoryRouter);
  app.use('/exercises', exerciseRouter);

  // 404
  app.use((req, res) => {
    res.status(404).json({message: '404 not found'});
  } );
