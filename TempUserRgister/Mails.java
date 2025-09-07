package demo;

import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Mails {

    public static void sendmail(String recipient) {
        System.out.println("Mail service started...");

        // SMTP properties
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");

        // Your email credentials
        String username = "anbukavi942@gmail.com";  // ✅ correct Gmail address
        String password = "Kavi17082000";      // ⚠️ use Gmail App Password here

        // Create session
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // Prepare the message
            Message message = prepareMessage(session, username, recipient);

            // Send the email
            Transport.send(message);
            System.out.println("Message sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static Message prepareMessage(Session session, String username, String recipient) {
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
            message.setSubject("Welcome to Mail Service");
            message.setText("This is a test email sent from Java program!");
            return message;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    // Main method to test
    public static void main(String[] args) {
        sendmail("anbukavi943@gmail.com"); // ✅ fixed email
    }
}
