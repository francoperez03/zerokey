import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function Select({ options, value, onChange, name, placeholder }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-white text-black py-2 rounded-xl border border-black placeholder:text-gray-400"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  console.log(form);

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
  
    if (name === 'cvv') {
      // Para el campo 'cvv': solo permite números y máximo 3 caracteres
      const numericValue = value.replace(/\D/g, ''); // Elimina caracteres no numéricos
      setForm({ ...form, [name]: numericValue.slice(0, 3) }); // Limita a 3 caracteres
    } else if (name === 'cardNumber') {
      // Para el campo 'cardNumber': solo permite números y máximo 16 caracteres
      const numericValue = value.replace(/\D/g, ''); // Elimina caracteres no numéricos
      setForm({ ...form, [name]: numericValue.slice(0, 16) }); // Limita a 16 caracteres
    } else if (name === 'name') {
      // Para el campo 'name': asegura que sea un string y permite espacios
      // Asegura que el valor sea un string y elimina caracteres no permitidos
      const sanitizedValue = value
        .replace(/[^a-zA-Z\s]/g, '') // Elimina cualquier carácter que no sea letra o espacio
  
      setForm({ ...form, [name]: sanitizedValue });
    } else {
      // Manejo de otros campos
      setForm({ ...form, [name]: value });
    }
  };
  
  
  
  
  

  return (
    <section className="flex flex-col gap-6 w-96 border p-4 rounded  m-auto bg-gray-50">
      <div className="flex flex-col gap-2">
        <Label className="">Name on Card</Label>
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
        <Label className="">Card Number</Label>
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
            <Select
              options={months}
              value={form.month}
              onChange={handleForm}
              name="month"
              placeholder="MM"
            />
            <Select
              options={years}
              value={form.year}
              onChange={handleForm}
              name="year"
              placeholder="YY"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>CVV</Label>
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
        <p className="text-[10px]  ">
          We will NOT send your CVV in this transaction, instead we will send a
          validation proof using{" "}
          <span className="text-blue-800 font-bold">Zero-Knowledge Proof</span>
        </p>

        <Button
          variant="outline"
          className="w-full bg-white text-black  rounded-xl "
        >
          Confirm
        </Button>
      </div>
    </section>
  );
}

export default Checkout;
