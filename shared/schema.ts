import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  practiceArea: text("practice_area").notNull(),
  content: text("content").notNull(),
  privacyAgreed: boolean("privacy_agreed").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").notNull().default("pending"), // pending, contacted, resolved
});

export const insertConsultationSchema = createInsertSchema(consultations).pick({
  name: true,
  phone: true,
  email: true,
  practiceArea: true,
  content: true,
  privacyAgreed: true,
});

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;
