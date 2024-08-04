import { Button } from "@/components/ui/button";
import { VscError } from "react-icons/vsc";

function Error() {
  return (
    <div className="flex flex-col gap-4 h-[450px] w-96 p-4 justify-around items-center bg-slate-50 rounde shadow-md shadow-gray-500">
      <VscError className="text-9xl text-red-500"/>
      <p className="text-2xl font-medium">Invalid Proof</p>
      <a href="/#demo"  >
        <Button className="rounded w-28 hover:text-red-500" variant="outline">
            Back
          </Button>
        </a>
    </div>
  );
}

export default Error;
