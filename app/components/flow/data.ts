export const flowList = {
  sub: [
    {
      id: "flow-list-1",
      name: "Development",
      sub: [
        { id: "flow-list-1-1", name: "External" },
        {
          id: "flow-list-1-2",
          name: "Internal",
          sub: [
            { id: "flow-list-2-1", name: "i1" },
            {
              id: "flow-list-2-2",
              name: "i2",
              sub: [
                { id: "flow-list-2-2-1", name: "i1" },
                { id: "flow-list-2-2-2", name: "i2" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "flow-list-2",
      name: "sales",
    },
  ],
};

export const flowList2 = {
  sub: [
    {
      id: "1",
      name: "1",
      sub: [
        { id: "1-1", name: "1-1" },
        {
          id: "1-2",
          name: "1-2",
          sub: [
            { id: "1-2-1", name: "1-2-1" },
            {
              id: "1-2-2",
              name: "1-2-2",
              sub: [
                { id: "1-2-2-1", name: "1-2-2-1" },
                { id: "1-2-2-2", name: "1-2-2-2" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "2",
      sub: [
        { id: "2-1", name: "2-1" },
        {
          id: "2-2",
          name: "2-2",
          sub: [
            { id: "2-3-2", name: "2-3-2" },
            {
              id: "2-3-3",
              name: "2-3-3",
              sub: [
                { id: "2-3-3-2", name: "2-3-3-2" },
                { id: "2-3-3-3", name: "2-3-3-3" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// console.log("1" + isActive["1"]);
// console.log("1-1" + isActive["1-1"]);
// console.log("1-2" + isActive["1-2"]);
// console.log("1-2-1" + isActive["1-2-1"]);
// console.log("1-2-2" + isActive["1-2-2"]);
// console.log("1-2-2-1" + isActive["1-2-2-1"]);
// console.log("1-2-2-2" + isActive["1-2-2-2"]);

// console.log("2" + isActive["2"]);
// console.log("2-1" + isActive["2-1"]);
// console.log("2-2" + isActive["2-2"]);
// console.log("2-3-2" + isActive["2-3-2"]);
// console.log("2-3-3" + isActive["2-3-3"]);
// console.log("2-3-3-2" + isActive["2-3-3-2"]);
// console.log("2-3-3-3" + isActive["2-3-3-3"]);
