import React from "react";

const Button = ({ buttonText }) => {
  return (
    <div className="bg-primary hover:bg-white group px-5 py-3 rounded-full flex flex-row items-center justify-center cursor-pointer gap-4 transition-all duration-300">
      <p className="text-lg font-semibold uppercase tracking-wide  group-hover:text-primary transition-all duration-300">
        {buttonText}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="20"
        id="arrow"
        className=" fill-white  group-hover:fill-primary transition-all duration-300"
      >
        <path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path>
      </svg>
    </div>
  );
};

export default Button;
