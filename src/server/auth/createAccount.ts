import { sha512, generateRandomNumber } from "./utils";
import { db } from "../db";

export async function createAccount(
  name: string,
  email: string,
  password: string,
) {
  const passhash = sha512(password);

  const result = await db.user.create({
    data: {
      name,
      email,
      passhash,
    },
  });

  return result;
}

export async function loginUser(email: string, passhash: string) {
  const user = await db.user.findUnique({
    where: {
      email,
      passhash,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
}

export function getEmailVerificationCodeHash() {
  const verificationCode = generateRandomNumber();
  const verificationCodeHash = sha512(verificationCode.toString());

  return verificationCodeHash;
}
