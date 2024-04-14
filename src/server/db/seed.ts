import { db } from "../db";
import { faker } from "@faker-js/faker";
import { checkUser, createAccount } from "../auth/account";

const CATEGORY_LIMIT = 100;

export async function seedCategories(overwrite = false) {
  // Check if categories already exist
  const existingCategoriesCount = await db.category.count();

  // overwrite if forced to or if no categories exist
  if (overwrite || existingCategoriesCount === 0) {
    // Delete any existing categories
    await db.category.deleteMany({});

    // Initialize array to hold categories to insert
    const categoriesToInsert = [];

    // Generate unique array of 100 vehicle manufacturers
    const vehicleManufacturers = faker.helpers.uniqueArray(
      () => faker.vehicle.manufacturer(),
      100,
    );

    // Generate unique array of 100 product categories
    const productCategories = faker.helpers.uniqueArray(
      () => faker.commerce.department(),
      100,
    );

    // Generate unique array of 100 product names
    const products = faker.helpers.uniqueArray(
      () => faker.commerce.product(),
      100,
    );

    // Generate unique array of 100 company names
    const companies = faker.helpers.uniqueArray(
      () => faker.company.name(),
      100,
    );

    // Combine all category arrays
    const categories: string[] = [
      ...vehicleManufacturers,
      ...products,
      ...companies,
      ...productCategories,
    ];

    // Randomize order of categories
    categories.sort(() => 0.5 - Math.random());

    // Loop through categories and add to insert array
    for (let i = 0; i < categories.length && i <= CATEGORY_LIMIT; i++) {
      categoriesToInsert.push({
        name: categories[i] ?? "",
      });
    }

    // Insert generated categories
    await db.category.createMany({
      data: categoriesToInsert,
    });
  }
}

export async function createDefaultUser(
  name: string,
  email: string,
  passhash: string,
) {
  try {
    await checkUser(email, passhash);
    return true;
  } catch (error) {
    // default user does not exist so create it
    try {
      await createAccount(name, email, passhash);
      return true;
    } catch (error) {
      // failes to create user
      return false;
    }
  }
}
