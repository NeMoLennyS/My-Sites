import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

// Configure a mock transporter for development
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "ethereal.user@ethereal.email",
    pass: process.env.EMAIL_PASSWORD || "ethereal_pass",
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message in our storage
      const savedMessage = await storage.saveContactMessage(validatedData);
      
      // Send an email notification
      try {
        await transporter.sendMail({
          from: '"Йога Ганеша" <valeriya-ivanova-73@mail.ru>',
          to: "valeriya-ivanova-73@mail.ru",
          subject: "Новое сообщение с сайта",
          text: `
            Имя: ${validatedData.name}
            Email: ${validatedData.email}
            Телефон: ${validatedData.phone || 'Не указан'}
            
            Сообщение:
            ${validatedData.message}
          `,
          html: `
            <h2>Новое сообщение с сайта Йога Ганеша</h2>
            <p><strong>Имя:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Телефон:</strong> ${validatedData.phone || 'Не указан'}</p>
            <p><strong>Сообщение:</strong></p>
            <p>${validatedData.message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Continue execution - we still want to save the message even if email fails
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Сообщение успешно отправлено" 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Ошибка при отправке сообщения. Пожалуйста, проверьте введенные данные." 
      });
    }
  });

  // Instagram endpoint removed

  const httpServer = createServer(app);
  return httpServer;
}
