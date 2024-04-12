import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
} from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";

import classNames from "classnames";

const PAGING_RANGE = 6;

interface PagerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pager: React.FC<PagerProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const LeftButton = () => {
    return (
      <button
        className={classNames(
          "m-0 inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:bg-gray-200",
          { "text-gray-700": currentPage > 1 },
          {
            "text-gray-200": currentPage <= 1,
            "pointer-events-none": currentPage <= 1,
          },
        )}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft />
      </button>
    );
  };

  const RightButton = () => {
    return (
      <button
        className={classNames(
          "m-0 inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:bg-gray-200",
          {
            "text-gray-700": currentPage < totalPages,
          },
          {
            "text-gray-200": currentPage >= totalPages,
            "pointer-events-none": currentPage >= totalPages,
          },
        )}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight />
      </button>
    );
  };

  const SkipToFirstButton = () => {
    return (
      <button
        className={classNames(
          "m-0 inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:bg-gray-200",
          { "text-gray-700": currentPage > 1 },
          {
            "text-gray-300": currentPage <= 1,
            "pointer-events-none": currentPage <= 1,
          },
        )}
        onClick={() => handlePageChange(1)}
      >
        <FaAngleDoubleLeft />
      </button>
    );
  };

  const SkipToLastButton = () => {
    return (
      <button
        className={classNames(
          "m-0 inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:bg-gray-200",
          {
            "text-gray-700": currentPage < totalPages,
          },
          {
            "text-gray-300": currentPage >= totalPages,
            "pointer-events-none": currentPage >= totalPages,
          },
        )}
        onClick={() => handlePageChange(totalPages)}
      >
        <FaAngleDoubleRight />
      </button>
    );
  };

  const renderButtons = () => {
    const buttons = [];

    let start = currentPage - Math.floor(PAGING_RANGE / 2);
    let stop = currentPage + Math.floor(PAGING_RANGE / 2);

    // Calculate start and stop page numbers
    if (start < 1) start = 1;
    if (stop > totalPages) stop = totalPages;

    if (start > 1) {
      // Add left ellipsis if there are more pages before the current range
      buttons.push(
        <button
          key={"leftEllipsis"}
          className="m-0 inline-flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300"
        >
          <FaEllipsis />
        </button>,
      );
    }

    // Render page number buttons
    for (let i = start; i <= stop; i++) {
      buttons.push(
        <button
          key={i}
          className={classNames(
            "inline-flex items-center rounded-md px-4 py-2 text-base font-medium",
            { "bg-black text-white": currentPage === i },
            { "text-gray-700 hover:bg-gray-200": currentPage !== i },
          )}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }

    if (stop < totalPages) {
      // Add right ellipsis if there are more pages after the current range
      buttons.push(
        <button
          key={"rightEllipsis"}
          className="m-0 inline-flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300"
        >
          <FaEllipsis />
        </button>,
      );
    }

    return buttons;
  };

  return (
    <div className="mt-4 flex justify-center">
      <SkipToFirstButton />
      <LeftButton />
      {renderButtons()}
      <RightButton />
      <SkipToLastButton />
    </div>
  );
};

export default Pager;
