const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.handler = async (event) => {
    const formData = JSON.parse(event.body);

    // Generate PDF
    const doc = new PDFDocument();
    const pdfPath = '/tmp/sitewalk-form.pdf'; // Temporary path
    doc.pipe(fs.createWriteStream(pdfPath));
    doc.text(`Sitewalk Information`, { align: 'center' });
    doc.text(`\nWorksite Address: ${formData.worksiteAddress}`);
    doc.text(`City: ${formData.worksiteCity}`);
    doc.text(`PO Number: ${formData.poNumber}`);
    doc.text(`\nCustomer Contact Name: ${formData.customerContactName}`);
    doc.text(`Email: ${formData.customerEmail}`);
    doc.end();

    // Send Email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.handler = async (event) => {
    const formData = JSON.parse(event.body);

    // Create PDF Document
    const doc = new PDFDocument();

    // Path to the custom font
    const fontPath = __dirname + 'Helvetica.ttf';

    // Set the font
    doc.font(fontPath);

    // Add content to the PDF
    doc.text(`Sitewalk Information`, { align: 'center' });
    doc.text(`\nWorksite Address: ${formData.worksiteAddress}`);
    doc.text(`City: ${formData.worksiteCity}`);
    doc.text(`PO Number: ${formData.poNumber}`);
    doc.end();

    return {
        statusCode: 200,
        body: 'PDF generated successfully!',
    };
};


    const mailOptions = {
        from: 'your-email@gmail.com',
        to: formData.customerEmail,
        subject: 'Sitewalk Form Submission',
        text: 'Please find the attached Sitewalk form.',
        attachments: [
            {
                filename: 'sitewalk-form.pdf',
                path: pdfPath,
            },
        ],
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: 'Email sent successfully!',
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'Failed to send email.',
        };
    }
};
