const express = require('express');
const router = express.Router();
const path = require('path');
//const mailjet = require('node-mailjet').connect("ApiKey", "ApiValue");//TO-DO. Add Values

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
        "Html-part":"<!doctype html><html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\"><head><title></title><!--[if !mso]><!-- --><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]--><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style type=\"text/css\">#outlook a { padding:0; } .ReadMsgBody { width:100%; } .ExternalClass { width:100%; } .ExternalClass * { line-height:100%; } body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; } table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; } img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; } p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type=\"text/css\">@media only screen and (max-width:480px) { @-ms-viewport { width:320px; } @viewport { width:320px; } }</style><!--<![endif]--><!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--><!--[if lte mso 11]> <style type=\"text/css\"> .outlook-group-fix { width:100% !important; } </style> <![endif]--><!--[if !mso]><!--><link href=\"https://fonts.googleapis.com/css?family=Libre+Franklin:400,600,700\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://use.typekit.net/fug8oco.css\" rel=\"stylesheet\" type=\"text/css\"><style type=\"text/css\">@import url(https://fonts.googleapis.com/css?family=Libre+Franklin:400,600,700); @import url(https://use.typekit.net/fug8oco.css);</style><!--<![endif]--><style type=\"text/css\">@media only screen and (min-width:480px) { .mj-column-per-100 { width:100% !important; max-width: 100%; } .mj-column-per-25 { width:25% !important; max-width: 25%; } .mj-column-per-50 { width:50% !important; max-width: 50%; } }</style><style type=\"text/css\">@media only screen and (max-width:480px) { table.full-width-mobile { width: 100% !important; } td.full-width-mobile { width: auto !important; } }</style><style type=\"text/css\">a {color:#000; text-decoration:none;} .btn p{ position: relative; display: inline-block; cursor: pointer; } .opacity--hover:hover { opacity: 0.8; } .btn-dark a { padding: 16px 79px; border-radius: 3px; letter-spacing:0.5px; display:block; border-top:1px solid #7a7a7a; border-bottom:1px solid #7a7a7a; } .ls1 {letter-spacing:1px;} @media (min-width: 480px) { } @media (max-width: 480px) { .mbp10 {padding-left:40px !important;padding-right:40px !important;} .mbbb {border-bottom:1px solid #eee;} .mbflex {display:flex;justify-content:space-between;} }</style></head><body><div><!-- logo cabecera --><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"border:2px solid #ededed;vertical-align:top;padding:26px 0px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" style=\"font-size:0px;padding:0;word-break:break-word;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;border-spacing:0px;\"><tbody><tr><td style=\"width:140px;\"><a href=\"http://www.bershka.com/share/?utm_campaign=es_welcome&amp;utm_medium=email&amp;utm_source=transactional\" target=\"_blank\"><img height=\"auto\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/bershka-lg.jpg\" style=\"border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;\" width=\"140\"></a></td></tr></tbody></table></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"background:#F5F5F5;background-color:#F5F5F5;Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#F5F5F5;background-color:#F5F5F5;width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:57px 0px;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" style=\"font-size:0px;padding:0;word-break:break-word;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;border-spacing:0px;\"><tbody><tr><td style=\"width:21px;\"><img height=\"23\" src=\"https://img.icons8.com/metro/420/lock-2.png\" style=\"border:0;display:block;outline:none;text-decoration:none;height:23px;width:100%;\" width=\"21\"></td></tr></tbody></table></td></tr><tr><td align=\"center\" style=\"font-size:0px;padding:25px 0px 0px;word-break:break-word;\"><div style=\"font-family:Libre Franklin, Helvetica;font-size:28px;font-weight:700;line-height:1;text-align:center;color:#000000;\">¡Hola!</div></td></tr><tr><td align=\"center\" style=\"font-size:0px;padding:20px 0px 29px;word-break:break-word;\"><div style=\"font-family:Libre Franklin, Helvetica;font-size:19px;font-weight:600;line-height:30px;text-align:center;color:#000000;\">¿Has pedido cambiar tu contraseña?</div></td></tr><tr><td align=\"center\" vertical-align=\"middle\" class=\"btn-dark\" style=\"font-size:0px;padding:0;padding-bottom:60;word-break:break-word;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:separate;line-height:100%;\"><tr><td align=\"center\" bgcolor=\"#000000\" role=\"presentation\" style=\"border:none;border-radius:3px;cursor:auto;padding:0px;background:#000000;\" valign=\"middle\"><a href=\"#\" style=\"background:#000000;color:#ffffff;font-family:Libre Franklin, Helvetica;font-size:13px;font-weight:700;line-height:120%;Margin:0;text-decoration:none;text-transform:uppercase;\" target=\"_blank\">HAZ CLICK AQUI</a></td></tr></table></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbp10\" style=\"font-size:0px;padding:56px 103px;word-break:break-word;\"><div style=\"font-family:benton-sans, Helvetica;font-size:15px;font-weight:500;line-height:23px;text-align:center;color:#000000;\">Si no quieres cambiar la contraseña no hagas nada. Vuelve a la home de Bershka.com :)</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td style=\"font-size:0px;padding:0;word-break:break-word;\"><p style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:100%;\"></p><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:600px;\" role=\"presentation\" width=\"600px\" ><tr><td style=\"height:0;line-height:0;\"> &nbsp; </td></tr></table><![endif]--></td></tr><tr><td align=\"center\" vertical-align=\"middle\" style=\"font-size:0px;padding:6px 0px;word-break:break-word;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:separate;line-height:100%;\"><tr><td align=\"center\" bgcolor=\"#ffffff\" role=\"presentation\" style=\"border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#ffffff;\" valign=\"middle\"><a href=\"#\" style=\"background:#ffffff;color:#000000;font-family:benton-sans, Helvetica;font-size:15px;font-weight:700;line-height:120%;Margin:0;text-decoration:none;text-transform:none;\" target=\"_blank\">MUJER</a></td></tr></table></td></tr><tr><td style=\"font-size:0px;padding:0;word-break:break-word;\"><p style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:100%;\"></p><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:600px;\" role=\"presentation\" width=\"600px\" ><tr><td style=\"height:0;line-height:0;\"> &nbsp; </td></tr></table><![endif]--></td></tr><tr><td align=\"center\" vertical-align=\"middle\" style=\"font-size:0px;padding:6px 0px;word-break:break-word;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:separate;line-height:100%;\"><tr><td align=\"center\" bgcolor=\"#ffffff\" role=\"presentation\" style=\"border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#ffffff;\" valign=\"middle\"><a href=\"#\" style=\"background:#ffffff;color:#000000;font-family:benton-sans, Helvetica;font-size:15px;font-weight:700;line-height:120%;Margin:0;text-decoration:none;text-transform:none;\" target=\"_blank\">HOMBRE</a></td></tr></table></td></tr><tr><td style=\"font-size:0px;padding:0;word-break:break-word;\"><p style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:100%;\"></p><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:600px;\" role=\"presentation\" width=\"600px\" ><tr><td style=\"height:0;line-height:0;\"> &nbsp; </td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:150px;\" ><![endif]--><div class=\"mj-column-per-25 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbbb\" style=\"font-size:0px;padding:18px 35px 18px 30px;word-break:break-word;\"><div style=\"font-family:Helvetica;font-size:12px;font-weight:400;letter-spacing:0.5px;line-height:14px;text-align:center;color:#000000;\">Envío gratuito a tienda</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td class=\"\" style=\"vertical-align:top;width:150px;\" ><![endif]--><div class=\"mj-column-per-25 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbbb\" style=\"font-size:0px;padding:18px;word-break:break-word;\"><div style=\"font-family:Helvetica;font-size:12px;font-weight:400;letter-spacing:0.5px;line-height:14px;text-align:center;color:#000000;\">Devolucion gratuita hasta 30 días</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td class=\"\" style=\"vertical-align:top;width:150px;\" ><![endif]--><div class=\"mj-column-per-25 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbbb\" style=\"font-size:0px;padding:18px;word-break:break-word;\"><div style=\"font-family:Helvetica;font-size:12px;font-weight:400;letter-spacing:0.5px;line-height:14px;text-align:center;color:#000000;\">Atención al cliente 900 456 003</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td class=\"\" style=\"vertical-align:top;width:150px;\" ><![endif]--><div class=\"mj-column-per-25 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbbb\" style=\"font-size:0px;padding:18px 40px;word-break:break-word;\"><div style=\"font-family:Helvetica;font-size:12px;font-weight:400;letter-spacing:0.5px;line-height:14px;text-align:center;color:#000000;\">Encuentra tu tienda</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td style=\"font-size:0px;padding:0;word-break:break-word;\"><p style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:100%;\"></p><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-top:solid 1px #ededed;font-size:1;margin:0px auto;width:600px;\" role=\"presentation\" width=\"600px\" ><tr><td style=\"height:0;line-height:0;\"> &nbsp; </td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0px 0px 40px 0px;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:300px;\" ><![endif]--><div class=\"mj-column-per-50 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:20px 0px 10px 0px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"ls1\" style=\"font-size:0px;padding:0;word-break:break-word;\"><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" ><tr><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 10px 0px 0px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/apple60.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td><td style=\"vertical-align:middle;\"><a href=\"#\" style=\"color:#333333;font-size:11px;font-weight:bold;font-family:Libre Franklin, Helvetica;line-height:22px;text-decoration:none;\" target=\"_blank\">iOS app</a></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 10px 0px 30px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/android60.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td><td style=\"vertical-align:middle;\"><a href=\"#\" style=\"color:#333333;font-size:11px;font-weight:bold;font-family:Libre Franklin, Helvetica;line-height:22px;text-decoration:none;\" target=\"_blank\">android app</a></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td class=\"\" style=\"vertical-align:top;width:300px;\" ><![endif]--><div class=\"mj-column-per-50 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:20px 0px 10px 0px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbflex\" style=\"font-size:0px;padding:0;word-break:break-word;\"><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" ><tr><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 0px 0px 8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/rrss/icofb.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 0px 0px 8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/rrss/icotw.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 0px 0px 8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/rrss/icoinsta.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 0px 0px 8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/rrss/icospo.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 0px 0px 8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/rrss/icoyt.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"float:none;display:inline-table;\"><tr><td style=\"padding:0px 0px 0px 8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-radius:3px;width:30px;\"><tr><td style=\"font-size:0;height:30px;vertical-align:middle;width:30px;\"><a href=\"#\" target=\"_blank\"><img height=\"30\" src=\"https://static.bershka.net/4/static/itxwebstandard/images/email/rrss/icopin.jpg\" style=\"border-radius:3px;\" width=\"30\"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" style=\"font-size:0px;padding:0;word-break:break-word;\"><div style=\"font-family:Libre Franklin, Helvetica;font-size:11px;font-weight:700;line-height:1;text-align:center;color:#000000;\"><a href=\"www.bershka.com/share/?openPrivacyPolicy=true\" style=\"color:#000000;\">Términos y condiciones</a> | <a href=\"#TO-DO\" style=\"color:#000000;\">Política de privacidad</a></div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"Margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:0;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tr><td align=\"center\" class=\"mbp10\" style=\"font-size:0px;padding:15px 0px 40px 0px;word-break:break-word;\"><div style=\"font-family:Libre Franklin, Helvetica;font-size:10px;line-height:14px;text-align:center;color:#929292;\">Bershka BSK España, S.A. CIF A- 78276854 Avda. de la Diputación, Edificio Inditex, Arteixo (A Coruña)</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>",
        "Recipients":[{"Email":"ivan.gonzalez@redegal.com"}]
    }

    const request = mailjet.post("send").request(options);
    
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('enviado');
    
});

app.get('/send/:template_ID', (req, res) => {
    var options = {
		"Messages":[
			{
				"From": {
					"Email": "ivan.gonzalez@redegal.com",
					"Name": "Mailjet Pilot"
				},
				"To": [
					{
					"Email": "ivan.gonzalez@redegal.com",
					"Name": "passenger 1"
					}
				],
				"TemplateID": 854088,
				"TemplateLanguage": true,
				"Subject": "Your email flight plan!"
			}
		]
	}

    const request = mailjet.post("send/"+req.params.template_ID).request(options);
    
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send(req.params.template_ID);
    
});

app.get('/template', (req, res) => {
    const request = mailjet.get("template").request();
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('consulta template');
});

app.get('/create-template', (req, res) => {
    var options = {
        "Author": "John Doe",
        "Categories": [
            "commerce"
        ],
        "Copyright": "John Doe",
        "Description": "Used for discount promotion.",
        "EditMode": 1,
        "IsStarred": true,
        "IsTextPartGenerationEnabled": true,
        "Locale": "en_US",
        "Name": "Promo Code",
        "OwnerType": "apikey",
        "Presets": "{\"h1\":{\"fontFamily\":\"'Arial Black', Helvetica, Arial, sans-serif\"}}",
        "Purposes": [
            "marketing"
        ]
    }
    const request = mailjet.post("template").request(options);
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('create template');
});

app.get('/template/:template_ID', (req, res) => {
    const request = mailjet.get("template/"+req.params.template_ID).request();
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    
    res.send('consulta de Template '+req.params.template_ID);
});

app.get('/template/:template_ID/detailcontent', (req, res) => {
    const request = mailjet.get("template/"+req.params.template_ID+"/detailcontent").request();
    request
    .then(result => {
        console.log(result.body)
    })
    .catch(err => {
        console.log(err.statusCode)
    })
    
    res.send('consulta contenido Template '+req.params.template_ID);
});

app.get('/contact', (req, res) => {
    const request = mailjet.get('contact').request();
    request
        .then(result => {
            console.log("Response Body ", result.body)
        })
        .catch(err => {
            console.log("Error StatusCode ", err.statusCode)
        })
        
    res.send("Listado de contactos");
});

app.get('/user', (req, res) => {
    const request = mailjet.get('user').request();
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
        
    res.send('consulta contenido Template');
});

app.use('/', router);

app.listen(process.env.port || PORT);