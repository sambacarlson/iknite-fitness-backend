if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import express from "express";
import mongoose from "mongoose";
import exerciseRouter from "./routes/exerciseRoutes";
import categoryRouter from "./routes/categoryRoutes";
import { log_message } from "./utilities/envSpecificHelpers";

// const environment = process.env
// console.log(environment.NODE_ENV);

const app = express();
//connect to db and listen to changes
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;
mongoose.connect(DB_URI)
.then(() => {
  app.listen(PORT);
  log_message(`listening on ${PORT}`)
})
.catch(error => {
  log_message(`error: ${error.message}`)
});

  app.use(express.json());
//routes
  
  app.use('/categories', categoryRouter);
  app.use('/exercises', exerciseRouter);
  /** all unknown routes return  list of endpoints */
  app.use('/', (req, res) => {
    const endpoints = {
      "/": "list of endpoint",
      "/categories": "json of all categories",
      "/exercises": "json of all exercise",
      "/exercises/:id": "create/update/delete and exercise",
      "/categories/:id": "create/update/delete a category",
      "docs": "https://github.com/sambacarlson/iknite-fitness-backend"
    }
    res.status(303).json(endpoints);
  });
  
  // 404
  // app.use((req, res) => {
  //   res.status(404).json({message: '404 not found'});
  // } );
