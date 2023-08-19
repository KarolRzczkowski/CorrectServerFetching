const express =  require('express');
const app = express();
const names = require('./names.json')
const port  =  process.env.PORT || 5000;
app.get('/api'  , (req , res) => {
res.json(names)
})

//port listenign
app.listen(port , () =>{
 console.log(`Serwer is running on the port ${port}`)
})
