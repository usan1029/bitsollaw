// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  consultations;
  currentId;
  constructor() {
    this.consultations = /* @__PURE__ */ new Map();
    this.currentId = 1;
  }
  async createConsultation(insertConsultation) {
    const id = this.currentId++;
    const consultation = {
      ...insertConsultation,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      status: "pending"
    };
    this.consultations.set(id, consultation);
    return consultation;
  }
  async getConsultations() {
    return Array.from(this.consultations.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  async getConsultation(id) {
    return this.consultations.get(id);
  }
  async updateConsultationStatus(id, status) {
    const consultation = this.consultations.get(id);
    if (consultation) {
      consultation.status = status;
      this.consultations.set(id, consultation);
      return consultation;
    }
    return void 0;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  practiceArea: text("practice_area").notNull(),
  content: text("content").notNull(),
  privacyAgreed: boolean("privacy_agreed").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").notNull().default("pending")
  // pending, contacted, resolved
});
var insertConsultationSchema = createInsertSchema(consultations).pick({
  name: true,
  phone: true,
  email: true,
  practiceArea: true,
  content: true,
  privacyAgreed: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/consultations", async (req, res) => {
    try {
      const consultationData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(consultationData);
      console.log("New consultation received:", consultation);
      res.status(201).json({
        success: true,
        message: "\uC0C1\uB2F4 \uC2E0\uCCAD\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        id: consultation.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "\uC785\uB825 \uC815\uBCF4\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."
        });
      }
    }
  });
  app2.get("/api/consultations", async (req, res) => {
    try {
      const consultations2 = await storage.getConsultations();
      res.json(consultations2);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "\uC0C1\uB2F4 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."
      });
    }
  });
  app2.patch("/api/consultations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      if (!status || !["pending", "contacted", "resolved"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC785\uB2C8\uB2E4."
        });
      }
      const consultation = await storage.updateConsultationStatus(id, status);
      if (!consultation) {
        return res.status(404).json({
          success: false,
          message: "\uC0C1\uB2F4 \uB0B4\uC5ED\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
        });
      }
      res.json({ success: true, consultation });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "\uC0C1\uB2F4 \uC0C1\uD0DC \uC5C5\uB370\uC774\uD2B8\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
