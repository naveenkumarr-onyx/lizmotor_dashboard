"use client";
import React, { useState } from "react";
import Tag from "./Tag";
import Heading from "./Heading";

const Flow = ({ data }: any) => {
  const [isActive, setIsActive] = useState<any>({});
  const maxWidth = 300;
  const fontSize = 14;
  const maxTagWidth = Math.ceil(maxWidth / ((fontSize * 77) / 100));
  var availableTagWidth = maxTagWidth;
  var noOfLine = 0;

  for (var i = 0; i < data.sub.length; i++) {
    availableTagWidth -= 3;
    if (data.sub[i].name.length > maxTagWidth) {
      noOfLine += Math.ceil(data.sub[i].name.length / maxTagWidth);
      continue;
    }
    if (data.sub[i].name.length > availableTagWidth) {
      noOfLine++;
      availableTagWidth = maxTagWidth;
      continue;
    }
    if (noOfLine === 0) {
      noOfLine++;
    }
    availableTagWidth -= data.sub[i].name.length;
  }

  var top = 150;
  if (data.name) {
    top += 20;
  }

  top += noOfLine * 18;

  const toggleKye = (key: any, sub: any) => {
    if (!sub) {
      return;
    }
    if (!key) {
      return;
    }
    setIsActive({
      [key]: !isKeyActive(key),
    });
  };

  const isKeyActive = (key: any) => {
    return isActive[key] === true;
  };

  return (
    <div className="relative flex flex-col items-center gap-[5px] w-[300px] rounded bg-[#ffffff] p-[20px] text-sm">
      {data.name ? <Heading name={data.name} /> : <></>}
      {data.sub ? (
        <div className="flex flex-wrap gap-[5px] justify-center">
          {data.sub.map((value: any, index: number) => {
            return (
              <div key={index}>
                <div onClick={() => toggleKye(value.id, value.sub)}>
                  <Tag
                    name={value.name}
                    hasChild={value.sub?.length}
                    isActive={isKeyActive(value.id)}
                  />
                </div>

                {value.sub ? (
                  <div
                    className={`absolute top-[100px] left-0 ${
                      isKeyActive(value.id) ? "" : "hidden"
                    } `}
                    style={{ top: top }}
                  >
                    <Flow data={value} />
                    <div
                      className={`z-[-10] left-1/2 absolute w-[2px] bg-gray-400 `}
                      style={{ height: top, bottom: top / 3 }}
                    ></div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Flow;
