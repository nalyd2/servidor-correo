const nodemailer = require('nodemailer');
module.exports=(formulario)=>{
    var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        //service:'gmail',
        port:587,
        tls:{rejectUnauthorized:false},
        auth:{
            user:'Greenleavesproyect@gmail.com',
            pass:'Prueba123'
        }
    });
    const mailOptions ={
        from:'"GreenLives" <Greenleavesproyect@gmail.com>',
        to:formulario.email,//correo destinatario
        subject:'GreenLeaves Contact',
        html:'<div class="col-md-8 row" >'+
        '<div class="cabecera col-md-12" style="background-color: #2cf32c99; border-radius: 25px; margin: 15px 0;">'+
            '<div class="textocabecera col-md-8">'+
                '<h1>Green Leaves</h1>'+
            '</div>'+
            '<div class="imagencabecera col-md-4 text-right">'+
                '<img height="75px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDkzLjk5OSA5My45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkzLjk5OSA5My45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMy42MDIsMTcuNTE5QzQuNDkxLDI4LjYwOCw1LjU4OCw0Ni42Nyw2LjI0Niw1My4zNTNjMjQuNjg0LTI5LjI0LDYxLjYwNi0yNy44MjIsNjEuNjA2LTI3LjgyMiAgICBTMTUuNTE0LDQzLjQ4NCwwLjE0Miw3OS40ODVjLTEuMjE0LDIuODQyLDUuNjk2LDYuNTM4LDcuMjczLDMuMTc4YzQuNzA3LTEwLjAxMiwxMS4yNjYtMTcuNTIxLDExLjI2Ni0xNy41MjEgICAgYzkuNjc3LDMuNjAxLDI2LjQxNyw3LjgyMSwzOC4yODItMC41MjhjMTUuNzYtMTEuMDkxLDE0LjE0OS0zNS42NzcsMzYuNjQ3LTQ3LjY0OEM5OC44NjUsMTQuMTcxLDQ5LjUxMSwyLjQ4NCwyMy42MDIsMTcuNTE5eiIgZmlsbD0iIzkxREM1QSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="'+
                '/>'+
            '</div>'+
        '</div>'+
        '<div style="text-align: center">'+
            '<label for="prueba">Estimado '+formulario.nombre+','+
                'Hemos recibido sus datos y nos pondremos en contacto con usted en la brevedad posible.'+
            '</label>'+
        '</div>'+
        
    '</div>'
        };
    transporter.verify(function(error,succes){
        if(error){
            console.log(error);
        }else{
            transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                console.log("ERROR"+err)
                else
                console.log(info);
                });
        }
    });
    
    
   
}