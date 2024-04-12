"use client";
import React, { useState } from "react";
import CatManager from "../_components/CatManager/CatManager";
import prefsdata from "../_components/CatManager/data";

const PrefsDialog: React.FC = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);
  return (
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
  );
};

export default PrefsDialog;
