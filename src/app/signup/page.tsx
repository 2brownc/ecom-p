import React from "react";

const SignUpDialog: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-slate-300 bg-white shadow-md">
      <div className="p-6 text-center">
        <h2 className="mb-4 text-3xl font-medium">Sign Up</h2>
        <form className="pt-5">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-left text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border border-slate-300 p-2 shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-left text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border border-slate-300 p-2 shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-left text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full rounded-md border border-slate-300 p-2 shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-black px-4 py-2 text-center text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="inline-block text-sm text-gray-700">Have an Account?</p>
          <button
            type="button"
            className="ml-2 text-sm text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpDialog;
