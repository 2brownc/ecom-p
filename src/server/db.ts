import { PrismaClient } from "@prisma/client";
import { seedCategories, createDefaultUser } from "./db/seed";

import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// seed categories table if needed
seedCategories().catch((error) => {
  console.error("Error seeding categories:", error);
});

// if default user account is not created, create one
const name = process.env.DEMO_USERNAME;
const passhash = process.env.DEMO_PASSHASH;
const email = process.env.DEMO_EMAIL;

if (name && passhash && email) {
  createDefaultUser(name, email, passhash).catch((error) => {
    console.error("Error seeding categories: ", error);
  });
}
