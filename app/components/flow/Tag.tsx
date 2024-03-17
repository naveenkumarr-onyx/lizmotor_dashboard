import React from "react";

const Tag = ({ name, hasChild, isActive, hasHover }: any) => {
  return (
    <div
      className={`py-[2px] px-[10px] rounded-md uppercase ${
        hasChild
          ? "cursor-pointer bg-[#fef3c7] text-[#a45e30]"
          : hasHover
          ? "cursor-help bg-[#e5e5e5] text-red-500"
          : "cursor-not-allowed bg-[#e5e5e5] text-[#717273]"
      }
      ${isActive ? "border-[1px] border-[#a45e30]" : ""}
      `}
    >
      {name}
    </div>
  );
};

export default Tag;
