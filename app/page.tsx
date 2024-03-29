import { Flow, flowList } from ".";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center flex-col p-10 gap-10">
      <Flow data={flowList} pNoOfLine={1} />
    </div>
  );
}
