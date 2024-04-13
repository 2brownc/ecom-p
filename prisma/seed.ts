import { seedCategories } from "../src/server/db/seed";

// Catch any errors
seedCategories(true).catch((error) => {
  console.error("Error seeding categories:", error);
});
