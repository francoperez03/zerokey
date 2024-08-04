import { VscError } from "react-icons/vsc";

function Error() {
  return (
    <div className="flex flex-col gap-4 h-[450px] w-96 p-4 justify-center items-center bg-slate-50 rounde shadow-md shadow-gray-500">
      <VscError />
      <p className="text-xl">Prueba inválida para este sitio</p>
    </div>
  );
}

export default Error;
