const express = require('../../models/LandingPage');
const PDFDocument = require('pdfkit')
const moment = require('moment')
exports.get = async function (req, res, next) {
    try {
        // var writeStream = fs.createWriteStream(req.body.filename);
        const query = "SELECT t.ticketid AS id , ud.userdetailid, ud.birthdate, ud.jk ,ud.address , u.nameuser  From ticket t \
        INNER JOIN user_detail AS ud ON t.userid = ud.userid \
        INNER JOIN users AS u ON t.userid = u.userid \
        group by ticketid DESC "
        const data = await express.sequelize.query(query, {
            type: express.sequelize.QueryTypes.SELECT
        });

        var myDoc = new PDFDocument({ bufferPages: true });

        let buffers = [];
        myDoc.on('data', buffers.push.bind(buffers));
        myDoc.on('end', () => {

            let pdfData = Buffer.concat(buffers);
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(pdfData),
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment;filename=test.pdf',
            })
                .end(pdfData);

        });
        data.map(index => {
            var year = moment(index.birthdate).format('YYYY')
            var day =  moment(index.birthdate).format('dddd')
            var month = moment(index.birthdate).format('MMMM')

            myDoc.font('Times-Roman')
                .fontSize(12)
                .text(`Ticket PDF`, {
                    align: 'center',
                })
                .moveDown(1)
                .fontSize(10)
                .text(`TicketId : ${index.id}`,{lineBreak: true})
                // .moveDown(0.5)
                .text(`Name : ${index.nameuser}`,{lineBreak: true})
                //.moveDown(0.5)
                .text(`birthdate : ${day} ${month} ${year}`,{lineBreak: true})
                //.moveDown(0.5)
                .text(`jk : ${index.jk}`,{lineBreak: true})
                //.moveDown(0.5)
                .text(`address : ${index.address}`,{lineBreak: true})
                //.moveDown(0.5)
            myDoc.rect(myDoc.x, 0, 410, myDoc.y).stroke();
            myDoc.moveDown(5)
        })
        myDoc.end()
    } catch (error) {
        next(error)
    }
}
