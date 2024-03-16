import { Flow, Navbar, flowList } from ".";
import Flow2 from "./components/flow/Flow2";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center flex-col p-10 gap-10">
      <Flow data={flowList} />
      {/* <Flow2 /> */}
    </div>
  );
}
