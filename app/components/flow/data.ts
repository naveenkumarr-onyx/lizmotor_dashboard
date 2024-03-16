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
