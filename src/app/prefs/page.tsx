"use client";
import React, { useState } from "react";
import CatManager from "../_components/CatManager/CatManager";
import prefsdata from "../_components/CatManager/data";
import { logoutUser } from "../actions";

const PrefsDialog: React.FC = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);

  return (
    <>
      <div className="mb-8 flex h-max flex-col items-end justify-end">
        <form className="w-min" action={logoutUser}>
          <button
            type="submit"
            className="rounded-md px-3 py-1 text-center text-black hover:bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        </form>
      </div>
      <div className="mx-auto w-full max-w-lg rounded-lg border border-slate-300 bg-white p-8 shadow-md">
        <div className="p-6 text-center">
          <h2 className="mb-4 text-3xl font-medium">
            Please mark your interests
          </h2>
          <div className="mb-4">We will keep you notified.</div>
          <div className="pt-5">
            <div className="mb-4 text-left text-xl font-medium">
              My saved interests!
            </div>
            <CatManager
              prefs={prefsdata}
              selectedPrefs={selectedPrefs}
              setSelectedPrefs={setSelectedPrefs}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrefsDialog;
