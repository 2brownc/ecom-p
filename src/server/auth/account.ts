import { sha512, generateRandomNumber } from "./utils";
import { db } from "../db";

export async function createAccount(
  name: string,
  email: string,
  passhash: string,
) {
  // Create new user record in database
  const result = await db.user.create({
    data: {
      name,
      email,
      passhash,
    },
  });

  return result;
}

export async function checkUser(email: string, passhash: string) {
  // Find user record matching email and password
  const user = await db.user.findFirst({
    where: {
      AND: [{ email }, { passhash }],
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
}

export function getEmailVerificationCodeHash() {
  // Generate random verification code
  const verificationCode = generateRandomNumber();

  // Hash the verification code
  const verificationCodeHash = sha512(verificationCode.toString());

  return verificationCodeHash;
}
