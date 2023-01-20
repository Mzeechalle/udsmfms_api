const status = require("../helpers/customfns");

exports.showEmail = (leaveReason, hodResponse, principalResponse, dvcResponse, hodDate, principalDate, dvcDate, hodTime, principalTime, dvcTime, leaveDays) => {
    const emailTemplate = `
    <!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" type="text/css"/>
    <!--<![endif]-->
    <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                padding: 0;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }

            p {
                line-height: inherit
            }

            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }

            @media (max-width:685px) {
                .desktop_hide table.icons-inner {
                    display: inline-block !important;
                }

                .icons-inner {
                    text-align: center;
                }

                .icons-inner td {
                    margin: 0 auto;
                }

                .row-content {
                    width: 100% !important;
                }

                .mobile_hide {
                    display: none;
                }

                .stack .column {
                    width: 100%;
                    display: block;
                }

                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }

                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>
        <body style="background-color: #d7e2df; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d7e2df; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0864af; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 2px solid T#F3E937; border-left: 2px solid T#F3E937; border-right: 2px solid T#F3E937; border-top: 2px solid T#F3E937;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:10px;padding-top:10px;width:100%;padding-right:0px;">
                <div align="center" style="line-height:10px"><img src="https://res.cloudinary.com/coictfms/image/upload/v1646580579/udsmlogopngtransparent_tezwmp.png" style="display: block; height: auto; border: 0; width: 57px; max-width: 100%;" width="57"/></div>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="75%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:25px;padding-right:60px;padding-top:25px;">
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: 1px;"><span style="font-size:24px;"><strong>Leave Application Status</strong></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: top center; background-image: url('https://res.cloudinary.com/coictfms/image/upload/v1655221788/bg_light_green_ielknt.png'); background-repeat: no-repeat; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 2px solid #F6B418; border-right: 0px solid #F6B418; border-top: 2px solid #F6B418; border-left: 0px;" width="58.333333333333336%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:55px;">
                <div style="font-family: sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #000000; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: left;"><span style="font-size:38px;"><strong><span style="">Progress Status</span></strong></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #010400; line-height: 1.2;">
                <p style="margin: 0; margin-left: 40px;"><span style="font-size:16px;"><strong> <span style="font-size:14px;">Subject </span></strong><span style="font-size:15px;"><strong>: </strong> ${leaveReason}</span></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td>
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #010400; line-height: 1.2;">
                <p style="margin: 0; text-align: left;"><span style="font-size:16px;"><strong> <span style="font-size:14px;">Days Requested</span></strong><span style="font-size:15px;"><strong>: </strong> ${leaveDays}</span></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="41.666666666666664%">
                <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:10px;padding-right:10px;width:100%;padding-top:50px;padding-bottom:5px;">
                <div align="center" style="line-height:10px"><img alt="vegetables" src="https://res.cloudinary.com/coictfms/image/upload/v1655237772/undraw_Mail_sent_re_0ofv__6_-removebg-preview_qzvrru.png" style="display: block; height: auto; border: 0; width: 222px; max-width: 100%;" title="vegetables" width="222"/></div>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 0px solid #000000; border-left: 0px solid #000000; border-right: 0px solid #000000; border-top: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:10px;text-align:center;width:100%;padding-top:30px;padding-bottom:5px;">
                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>PERSON</strong></h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;">
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #3c7925; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:16px;color:#000000;"><strong><span style="font-size:15px;">STATUS</span></strong></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-top:35px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>DATE</strong></h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-top:35px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>TIME</strong></h1>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                <table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td>
                <div align="center">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span> </span></td>
                </tr>
                </table>
                </div>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-right: 0px solid #000000; border-top: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:25px;padding-top:10px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;">Head</h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:5px;padding-right:10px;padding-top:10px;">
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: ${status.statusColor(hodResponse)}; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: left; margin-left: 40px;"><span style="font-size:16px;"><span style="font-size:15px;">${hodResponse}</span></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-top:15px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #464444; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${hodDate}</span></h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:60px;padding-top:15px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #464444; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: justify; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${hodTime}</span></h1>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:25px;text-align:center;width:100%;padding-top:30px;padding-bottom:5px;">
                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;">Principal</h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:5px;padding-right:10px;padding-top:30px;">
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: ${status.statusColor(principalResponse)}; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: left; margin-left: 40px;"><span style="font-size:15px;">${principalResponse}</span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-top:35px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #464444; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${principalDate}</span></h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:60px;padding-top:35px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #464444; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: justify; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${principalTime}</span></h1>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:25px;padding-top:20px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">DVC - Academic</span></h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:10px;padding-left:5px;padding-right:10px;padding-top:25px;">
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: ${status.statusColor(dvcResponse)}; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: left; margin-left: 40px;"><span style="font-size:15px;">${dvcResponse}</span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-top:30px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #464444; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${dvcDate}</span></h1>
                </td>
                </tr>
                </table>
                </td>
                <td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-left:60px;padding-top:30px;text-align:center;width:100%;padding-bottom:5px;">
                <h1 style="margin: 0; color: #464444; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 13px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: justify; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${dvcTime}</span></h1>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                <table border="0" cellpadding="10" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td>
                <div align="center">
                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://kelvkedyson.github.io/udsmleave_ui/#/" style="height:30px;width:173px;v-text-anchor:middle;" arcsize="67%" strokeweight="0.75pt" strokecolor="#0864AF" fillcolor="#f6b418"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#0864af; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]--><a href="https://kelvkedyson.github.io/udsmleave_ui/#/" style="text-decoration:none;display:inline-block;color:#0864af;background-color:#f6b418;border-radius:20px;width:auto;border-top:1px solid #0864AF;font-weight:400;border-right:1px solid #0864AF;border-bottom:1px solid #0864AF;border-left:1px solid #0864AF;padding-top:0px;padding-bottom:0px;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 1.8; word-break: break-word; mso-line-height-alt: 29px;"><span data-mce-style="font-size: 16px; line-height: 28px;" style="font-size: 16px; line-height: 28px;"><span data-mce-style="line-height: 21px;" style="line-height: 21px;">Click here to Login</span></span></span></span></a>
                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                </div>
                </td>
                </tr>
                </table>
                <table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td>
                <div align="center">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span> </span></td>
                </tr>
                </table>
                </div>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: top center;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td>
                <div align="center" style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;"></div>
                </td>
                </tr>
                </table>
                <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td>
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #000000; line-height: 1.8; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif;">
                <p style="margin: 0; font-size: 14px; text-align: left;"><span style="color:#717070;">UDSM - FMS</span></p>
                <p style="margin: 0; font-size: 14px; text-align: left;"><span style="color:#201f1f;">University of Dar es Salaam</span></p>
                <p style="margin: 0; font-size: 14px; text-align: left;"><span style="color:#717070;">Tel: </span><span style="color:#0a38b8;">+255 744 345 000</span></p>
                <p style="margin: 0; font-size: 14px; text-align: left;"><span style="color:#717070;">Website:</span> <span style="color:#0a38b8;"><a href="https://www.udsm.ac.tz/" rel="noopener" style="text-decoration:underline;color:#0a38b8;" target="_blank">www.udsm.ac.tz</a></span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td>
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #000000; line-height: 1.8; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif;">
                <p style="margin: 0; font-size: 14px; text-align: left;"><span style="color:#000000;"><strong><span style="">IMPORTANT</span></strong></span></p>
                <p style="margin: 0; font-size: 14px; text-align: left;"><em><span style="color:#161515;">The content of this email is intended for the recipient only. If this email reached you by mistake, please let us know so that we can ensure that this doesn’t happen in the future and delete the message.</span></em></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0864af; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td>
                <div style="font-family: Tahoma, Verdana, sans-serif">
                <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #000000; line-height: 1.8; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif;">
                <p style="margin: 0; text-align: center; font-size: 14px; mso-line-height-alt: 25.2px;"><span style="font-size:14px;"><span style="color:#ffffff;">Copyright © ${new Date().getFullYear()}, All rights reserved</span>.</span><u><span style="color:#0a38b8;"><a href="mailto:coict.fms@gmail.com" rel="noopener" style="text-decoration:underline;color:#0a38b8;" target="_blank"></a></span></u></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 665px;" width="665">
                <tbody>
                <tr>
                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="vertical-align: middle; text-align: center;">
                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                <!--[if !vml]><!-->
                <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                <!--<![endif]-->
                </table>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
            </table><!-- End -->
        </body>
    </html>
`;

    return emailTemplate;

};