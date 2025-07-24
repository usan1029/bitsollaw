import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit consultation request
  app.post("/api/consultations", async (req, res) => {
    try {
      const consultationData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(consultationData);
      
      // In a real application, you would send an email notification here
      // using nodemailer or similar service
      console.log("New consultation received:", consultation);
      
      res.status(201).json({ 
        success: true, 
        message: "상담 신청이 성공적으로 접수되었습니다.",
        id: consultation.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "입력 정보를 확인해 주세요.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." 
        });
      }
    }
  });

  // Get all consultations (for admin purposes)
  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "상담 목록을 불러오는데 실패했습니다." 
      });
    }
  });

  // Update consultation status
  app.patch("/api/consultations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || !["pending", "contacted", "resolved"].includes(status)) {
        return res.status(400).json({ 
          success: false, 
          message: "유효하지 않은 상태입니다." 
        });
      }

      const consultation = await storage.updateConsultationStatus(id, status);
      
      if (!consultation) {
        return res.status(404).json({ 
          success: false, 
          message: "상담 내역을 찾을 수 없습니다." 
        });
      }

      res.json({ success: true, consultation });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "상담 상태 업데이트에 실패했습니다." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
