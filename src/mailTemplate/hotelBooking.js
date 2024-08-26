const HBhtmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { width: 80%; margin: auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 10px; text-align: center; }
            .content { margin: 20px 0; }
            .footer { font-size: 0.8em; color: #777; text-align: center; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Reservation Received</h1>
            </div>
            <div class="content">
                <p>Dear [User],</p>
                <p>Thank you for your reservation request!</p>
                <p>We have received your reservation data and are currently processing it. Our team will review the information and get back to you within the next 48 hours.</p>
                <p>If you have any questions in the meantime, please do not hesitate to contact us.</p>
                <p>Thank you for choosing [Your Company Name].</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>Your Company Name<br>[Your Contact Information]</p>
            </div>
        </div>
    </body>
    </html>
`;
