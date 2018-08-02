const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/formulario',(req,res)=>{
    configMensaje(req.body);    
    res.status(200).send({x:'exito'});
})
app.listen(3000,()=>{
console.log('Servidor Corriendox')
});