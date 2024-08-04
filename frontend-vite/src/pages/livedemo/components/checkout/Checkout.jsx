import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SelectInput from "../selected/SelectedInput";
import { postTest } from "../../actions";
import { FiInfo } from "react-icons/fi";

function Checkout({ startInterval }) {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    email: "",
    url: "",
    alias: "",
    days: "",
  });

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, "0"), // Asegura que el valor tenga 2 dígitos
    label: `${String(i + 1).padStart(2, "0")}`,
  }));

  const years = Array.from({ length: 57 - 24 + 1 }, (_, i) => ({
    value: (24 + i).toString(), // Asegura que el valor sea una cadena de texto
    label: (24 + i).toString(), // Etiqueta también como cadena de texto
  }));

  const handleForm = (e) => {
    const { name, value } = e.target;
    if (name === "cvv") {
      // Para el campo 'cvv': solo permite números y máximo 3 caracteres
      const numericValue = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
      setForm({ ...form, [name]: numericValue.slice(0, 3) }); // Limita a 3 caracteres
    } else if (name === "days") {
      // Para el campo 'cvv': solo permite números y máximo 3 caracteres
      const numericValue = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
      setForm({ ...form, [name]: numericValue.slice(0, 3) }); // Limita a 3 caracteres
    } else if (name === "cardNumber") {
      // Para el campo 'cardNumber': solo permite números y máximo 16 caracteres
      const numericValue = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
      setForm({ ...form, [name]: numericValue.slice(0, 16) }); // Limita a 16 caracteres
    } else if (name === "name") {
      // Para el campo 'name': asegura que sea un string y permite espacios
      // Asegura que el valor sea un string y elimina caracteres no permitidos
      const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, ""); // Elimina cualquier carácter que no sea letra o espacio

      setForm({ ...form, [name]: sanitizedValue });
    } else {
      // Manejo de otros campos
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="flex gap-12 shadow-md shadow-gray-300 bg-white p-6">
      <div className="flex flex-col gap-6 size-96 border p-4 rounded  m-auto bg-gray-50">
        <div className="flex flex-col gap-2">
          <div className="relative inline-block h-sm">
            <label className="flex gap-1 items-center text-sm">
              Email
              <span className="relative">
                <FiInfo className="text-blue-500 cursor-pointer group text-[12px]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 bg-black text-white text-sm rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Domain URL
                  <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black"></div>
                </div>
              </span>
            </label>
          </div>
          <Input
            type="text"
            name="email"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="Johnsmith@gmail.com"
            value={form.email}
            onChange={handleForm}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative inline-block">
            <label className="flex gap-1 items-center text-sm">
              Domain URL
              <span className="relative">
                <FiInfo className="text-blue-500 cursor-pointer group text-[12px]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 bg-black text-white text-sm rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Información adicional aquí
                  <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black"></div>
                </div>
              </span>
            </label>
          </div>
          <Input
            type="text"
            name="url"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="www.amazon.com"
            value={form.url}
            onChange={handleForm}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative inline-block">
            <label className="flex gap-1 items-center text-sm">
              Card Alias
              <span className="relative">
                <FiInfo className="text-blue-500 cursor-pointer group text-[12px]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 bg-black text-white text-sm rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Información adicional aquí
                  <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black"></div>
                </div>
              </span>
            </label>
          </div>
          <Input
            type="text"
            name="alias"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="John Visa HSBC Amazon"
            value={form.alias}
            onChange={handleForm}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative inline-block">
            <label className="flex gap-1 items-center text-sm">
              Utility Days
              <span className="relative">
                <FiInfo className="text-blue-500 cursor-pointer group text-[12px]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 bg-black text-white text-sm rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Información adicional aquí
                  <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black"></div>
                </div>
              </span>
            </label>
          </div>
          <Input
            type="text"
            name="days"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="60"
            value={form.days}
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 size-96 border p-4 rounded   m-auto bg-gray-50">
        <div className="flex flex-col gap-2">
          <Label className="h-[20px] flex items-center">Name on Card</Label>
          <Input
            type="text"
            name="name"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="John Smith"
            value={form.name}
            onChange={handleForm}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="h-[20px] flex items-center">Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="0000 0000 0000 0000"
            value={form.cardNumber}
            onChange={handleForm}
          />
        </div>
        <div className="flex gap-2  ">
          <div className="flex flex-col w-full gap-2">
            <Label>Expiry</Label>
            <div className="flex gap-2  ">
              <SelectInput
                options={months}
                value={form.month}
                onChange={handleForm}
                name="month"
                placeholder="MM"
              />
              <SelectInput
                options={years}
                value={form.year}
                onChange={handleForm}
                name="year"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="">CVV</Label>
            <Input
              type="text"
              className=" bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
              placeholder="CVV"
              value={form.cvv}
              onChange={handleForm}
              name="cvv"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="w-full bg-white text-black mt-6  rounded-xl "
            onClick={() => {
              startInterval();
              postTest(form);
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
