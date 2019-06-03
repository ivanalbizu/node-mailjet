const express = require('express');
const router = express.Router();
const path = require('path');
const mailjet = require('node-mailjet').connect("ApiKey", "ApiValue");//TO-DO. Add Values

const app = express();
const PORT = 3000;


router.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/send', (req, res) => {
    var options = {
        "FromEmail":"ivan.gonzalez@redegal.com",
        "FromName":"Mailjet Pilot",
        "Subject":"Your email flight plan!",
        "Text-part":"Dear passenger, welcome to Mailjet! May the delivery force be with you!",
        "Html-part":"<h3>Dear passenger, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!<br />May the delivery force be with you!",
        "Recipients":[{"Email":"ivan.gonzalez@redegal.com"}]
    }

    const request = mailjet.post("send").request(options);
    
    request
        .then(res => {
            console.log(res.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('enviado');
    
});

app.get('/template', (req, res) => {
    const request = mailjet.get("template").request();
    request
        .then(res => {
            console.log(res.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('consulta');
});

app.get('/template/:template_ID', (req, res) => {
    const request = mailjet.get("template/"+req.params.template_ID).request();
    request
        .then(res => {
            console.log(res.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('consulta de Template '+req.params.template_ID);
});

app.get('/template/:template_ID/detailcontent', (req, res) => {
    const request = mailjet.get("template/"+req.params.template_ID+"/detailcontent").request();
    request
    .then(res => {
        console.log(res.body)
    })
    .catch(err => {
        console.log(err.statusCode)
    })
    
    res.send('consulta contenido Template '+req.params.template_ID);
});

app.use('/', router);

app.listen(process.env.port || PORT);