"use server";

import { sha512 } from "~/server/auth/utils";
import { checkUser } from "~/server/auth/account";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/*
const cookieConfig = {
  httpOnly: true, // prevent client-side access
  sameSite: "strict", // prevent cross-site requests
};
*/

export const unsetCookies = async () => {
  // unset cookies
  cookies().set("ecom-auth-status", "loggedout");
  cookies().delete("ecom-email");
  cookies().delete("ecom-username");
};

export const setCookies = async (user: { email: string; name: string }) => {
  cookies().set("ecom-email", user.email);
  cookies().set("ecom-username", user.name);
  cookies().set("ecom-auth-status", "loggedin");
};

export const checkAuthentication = async () => {
  return cookies().get("ecom-auth-status")?.value === "loggedin";
};

// Load preferences page
const loadPrefsPage = async () => {
  redirect("/prefs");
};

// Load login page
const loadLoginPage = async () => {
  redirect("/login");
};

export const logoutUser = async () => {
  await unsetCookies();
  await loadLoginPage();
};

// Handle login form submission
export const handleLogin = async (formData: FormData) => {
  // Get email and password from form
  const email = formData.get("email") as string;
  const passhash = sha512(formData.get("password") as string);

  try {
    // Check user credentials
    const user = await checkUser(email, passhash);

    // If credentials valid, set auth cookies
    if (user) {
      await setCookies(user);
    }
  } catch (error) {
    // Logout and load login page if login failed
    await logoutUser();
  }

  // Load preferences page if login succeeded
  await loadPrefsPage();
};
