import React from "react";

const Tag = ({ name }: any) => {
  return (
    <div className="py-[2px] px-[10px] bg-[#fef3c7] text-[#a45e30] rounded-md cursor-pointer uppercase">
      {name}
    </div>
  );
};

export default Tag;
