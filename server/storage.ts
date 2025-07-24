import { consultations, type Consultation, type InsertConsultation } from "@shared/schema";

export interface IStorage {
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  getConsultation(id: number): Promise<Consultation | undefined>;
  updateConsultationStatus(id: number, status: string): Promise<Consultation | undefined>;
}

export class MemStorage implements IStorage {
  private consultations: Map<number, Consultation>;
  private currentId: number;

  constructor() {
    this.consultations = new Map();
    this.currentId = 1;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentId++;
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: new Date(),
      status: "pending",
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getConsultation(id: number): Promise<Consultation | undefined> {
    return this.consultations.get(id);
  }

  async updateConsultationStatus(id: number, status: string): Promise<Consultation | undefined> {
    const consultation = this.consultations.get(id);
    if (consultation) {
      consultation.status = status;
      this.consultations.set(id, consultation);
      return consultation;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
