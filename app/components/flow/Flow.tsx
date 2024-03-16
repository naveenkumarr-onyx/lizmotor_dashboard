"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Tag from "./Tag";

const Flow = ({ data }: any) => {
  const [isActive, setIsActive] = useState<any>({});

  const updateActive = (key: string) => {
    setIsActive((pre: any) => ({
      ...pre,
      [key]: !pre[key],
    }));
  };
  const isKeyActive = (key: any) => {
    return isActive[key] === true;
  };

  console.log(isKeyActive("flow-list-1-1"));
  return (
    <div className="relative flex flex-col items-center gap-[5px] w-[300px] rounded bg-[#ffffff] p-[20px] text-sm">
      {data.name ? <Heading name={data.name} /> : <></>}

      {data.sub ? (
        <div className="flex flex-wrap gap-[5px] justify-center">
          {data.sub.map((value: any, index: number) => {
            return (
              <div key={index}>
                <div
                  className="bg-gray-200 px-[10px]"
                  onClick={() => updateActive(value.id)}
                >
                  <Tag name={value.name} />
                  {isKeyActive(value.id) ? "yes" : "no"}
                </div>
                {value.sub ? (
                  <div className="p-[10px] absolute top-[100px] left-[-10px]">
                    <Flow data={value} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Flow;
