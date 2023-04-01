if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import express from "express";
import mongoose from "mongoose";
import exerciseRouter from "./routes/exerciseRoutes";
import categoryRouter from "./routes/categoryRoutes";

const environment = process.env
console.log(environment.NODE_ENV);

const app = express();
//connect to db and listen to changes
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;
mongoose.connect(DB_URI)
  .then(() => {
    app.listen(PORT);
    //TODO: remove console.log
    console.log(`listening on ${PORT}`);
  })
  .catch(error => {
    //TODO: handle error
    console.log(error.message);
  });

  //routes
  app.use('/', (req, res) => {
    const endpoints = {
      "/": "list of endpoint",
      "/categories": "json of all categories",
      "/exercises": "json of all exercise",
      "/exercises/:id": "create/update/delete and exercise",
      "/categories/:id": "create/update/delete a category",
      "docs": "https://github.com/sambacarlson/iknite-fitness-backend"
    }
    res.status(200).json(endpoints);
  })
  app.use('/categories', categoryRouter);
  app.use('/exercises', exerciseRouter);

  // 404
  app.use((req, res) => {
    res.status(404).json({message: '404 not found'});
  } );
