import React from 'react';

export const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#cc0000] text-white py-2 px-4 text-center font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-md flex items-center justify-center gap-2 overflow-hidden w-full max-w-full">
      <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
      <span className="truncate">EXTRA 25% OFF ON ONLINE PAYMENT</span>
    </div>
  );
};
