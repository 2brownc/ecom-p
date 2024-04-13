import { createHash } from "crypto";

export function sha512(text: string) {
  const hash = createHash("sha512");
  hash.update(text);
  return hash.digest("hex"); // Output in hexadecimal format
}

export function generateRandomNumber(): number {
  const min = 10000000; // Minimum 8-digit number
  const max = 99999999; // Maximum 8-digit number
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
