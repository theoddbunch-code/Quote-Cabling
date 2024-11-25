const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    try {
        // Parse the incoming form data
        const formData = JSON.parse(event.body);

        // Generate PDF
        const pdfPath = '/tmp/sitewalk-form.pdf'; // Use /tmp for serverless environments
        const doc = new PDFDocument();
        const fontPath = path.resolve(__dirname, '/data/Helvetica.ttf');

        // Pipe the PDF content to the file
        const writeStream = fs.createWriteStream(pdfPath);
        doc.pipe(writeStream);

        doc.font(fontPath);
        
        // Add PDF content
        doc.text(`Sitewalk Information`, { align: 'center' });
        doc.text(`\nWorksite Address: ${formData.worksiteAddress}`);
        doc.text(`City: ${formData.worksiteCity}`);
        doc.text(`PO Number: ${formData.poNumber}`);
        doc.text(`\nCustomer Contact Name: ${formData.customerContactName}`);
        doc.text(`Email: ${formData.customerEmail}`);
        doc.end();

        // Wait for the PDF to finish writing
        await new Promise((resolve) => writeStream.on('finish', resolve));

        // Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Replace with your email service
            auth: {
                user: 'your-email@gmail.com', // Replace with your email
                pass: 'your-email-password', // Replace with your email password or app password
            },
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: formData.customerEmail, // Send to the customer's email
            subject: 'Sitewalk Form Submission',
            text: 'Please find the attached Sitewalk form.',
            attachments: [
                {
                    filename: 'sitewalk-form.pdf',
                    path: pdfPath, // Attach the generated PDF
                },
            ],
        };

        await transporter.sendMail(mailOptions);

        // Return success response
        return {
            statusCode: 200,
            body: 'Email sent successfully!',
        };
    } catch (error) {
        console.error('Error:', error);

        // Return error response
        return {
            statusCode: 500,
            body: `Error: ${error.message}`,
        };
    }
};
