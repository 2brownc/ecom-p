import React from "react";

const VerifyDialog: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-slate-300 bg-white shadow-md">
      <div className="p-6 text-center">
        <h2 className="mb-4 text-3xl font-medium">Verify your email</h2>
        <div className="mb-4 font-medium">
          Enter the 8 digit code you have received on your email
        </div>
        <form className="pt-5">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-2 block text-center text-sm font-medium"
            >
              Code
            </label>
            <div className="flex-row space-x-2">
              <input
                type="text"
                id="code1"
                name="code1"
                className="w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={1}
              />
              <input
                type="text"
                id="code2"
                name="code2"
                className="w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={2}
              />
              <input
                type="text"
                id="code3"
                name="code3"
                className=" w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={3}
              />
              <input
                type="text"
                id="code4"
                name="code4"
                className=" w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={4}
              />
              <input
                type="text"
                id="code5"
                name="code5"
                className=" w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={5}
              />
              <input
                type="text"
                id="code6"
                name="code6"
                className=" w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={6}
              />
              <input
                type="text"
                id="code7"
                name="code7"
                className=" w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={7}
              />
              <input
                type="text"
                id="code8"
                name="code8"
                className=" w-9 rounded-md border border-slate-300 p-2 text-center shadow-sm transition duration-300 ease-in hover:border-slate-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
                tabIndex={8}
              />
            </div>
          </div>
          <button
            tabIndex={9}
            type="submit"
            className="w-full rounded-md bg-black px-4 py-2 text-center text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyDialog;
