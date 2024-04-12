"use client";

import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export type Offer = {
  text: string;
};

interface BannerProps {
  offers: Offer[];
}

function Banner({ offers }: BannerProps) {
  const [currentOffer, setCurrentOffer] = useState<number>(0);

  if (offers.length === 0) return null;

  const goLeft = () => {
    setCurrentOffer((prevOffer) => {
      if (prevOffer === 0) {
        return offers.length - 1;
      }

      return (prevOffer - 1) % offers.length;
    });
  };

  const goRight = () => {
    setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
  };

  const LeftButton = () => {
    return (
      <div
        onClick={goLeft}
        className="w-min cursor-pointer text-gray-700 hover:text-gray-900"
      >
        <FaAngleLeft />
      </div>
    );
  };

  const RightButton = () => {
    return (
      <div
        onClick={goRight}
        className="w-min cursor-pointer text-gray-700 hover:text-gray-900"
      >
        <FaAngleRight />
      </div>
    );
  };

  return (
    <div className="h-fit bg-gray-100 py-4">
      <div className="container mx-auto flex h-fit items-center justify-center">
        <LeftButton />
        {offers.map(
          (offer, index) =>
            index === currentOffer && (
              <div key={index} className="mx-4 inline-block h-min">
                <span className="text-black">{offer.text}</span>
              </div>
            ),
        )}
        <RightButton />
      </div>
    </div>
  );
}

export default Banner;
