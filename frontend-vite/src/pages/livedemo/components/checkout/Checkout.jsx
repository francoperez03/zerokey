import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Checkout() {
  return (
    <section className="flex flex-col w-96 border   m-auto bg-gray-50">
      <Label className="mt-10">Name on Card</Label>
      <Input
        type="text"
        className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
        placeholder="John Smith"
      />
      <Label className="mt-10">Card Number</Label>
      <Input
        type="text"
        className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
        placeholder="0000 0000 0000 0000"
      />
      <div className="flex">
        <div className="flex flex-col">
          <Label>Expiry</Label>
          <div className="flex">
            <Input
              type="text"
              className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
              placeholder="MM"
            />
            <Input
              type="text"
              className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
              placeholder="YY"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Label>CVV</Label>
          <Input
            type="text"
            className="w-full bg-white text-black py-2 rounded-xl placeholder:text-gray-400"
            placeholder="CVV"
          />
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full bg-white text-black py-2 rounded-xl mt-10"
      >
        Confirm
      </Button>
    </section>
  );
}

export default Checkout;
