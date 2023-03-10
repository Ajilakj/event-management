const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(cors({
  origin: '*'
}));

// app.get("/",function(req,res){
//   res.send("Hello world deployment")
// })

// Force false so data doesn't get dropped on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
