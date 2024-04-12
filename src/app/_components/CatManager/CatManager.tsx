import React, { useState } from "react";

import type { Pref } from "../../../types/types";
import CheckBox from "./CheckBox";
import Pager from "./Pager";

const PAGING_LIMIT = 6;

interface CatManagerProps {
  prefs: Pref[];
  selectedPrefs: number[];
  setSelectedPrefs: React.Dispatch<React.SetStateAction<number[]>>;
}

const CatManager: React.FC<CatManagerProps> = ({
  prefs,
  selectedPrefs,
  setSelectedPrefs,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Check if preference ID is on the current page
  const isOnCurrentPage = (id: number): boolean => {
    const notBefore: boolean = id > PAGING_LIMIT * (currentPage - 1);
    const notAfter: boolean = id <= PAGING_LIMIT * currentPage;

    return notBefore && notAfter;
  };

  // Handle checkbox change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prefId: number = parseInt(event.target.id);

    if (selectedPrefs.includes(prefId)) {
      setSelectedPrefs((oldPrefs: number[]) =>
        oldPrefs.filter((id) => id !== prefId),
      );
    } else {
      setSelectedPrefs((oldPrefs: number[]) => [...oldPrefs, prefId]);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col">
          {prefs.map(
            (pref) =>
              isOnCurrentPage(pref.id) && (
                <div key={pref.id}>
                  <CheckBox
                    pref={pref}
                    checked={selectedPrefs.includes(pref.id)}
                    handleChange={handleChange}
                  />
                </div>
              ),
          )}
        </div>
      </div>
      <Pager
        currentPage={currentPage}
        totalPages={prefs.length / PAGING_LIMIT}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CatManager;
