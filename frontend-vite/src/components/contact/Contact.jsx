import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function Contact() {
  return (
    <section
      id="contact"
      className="p-8 bg-white rounded-lg shadow-lg w-full  mx-auto"
    >
      <h3 className="text-5xl text-center font-medium mb-6">Contact Us</h3>
      <div className="flex flex-col gap-4 w-[800px] m-auto">
        <div className="flex flex-col">
          <Label htmlFor="name" className="mb-2 text-gray-700">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            variant="outline"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-greay-200"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="email" className="mb-2 text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            variant="outline"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-greay-200"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="asunto" className="mb-2 text-gray-700">
            Asunto
          </Label>
          <Input
            id="asunto"
            name="asunto"
            type="text"
            placeholder="Asunto"
            variant="outline"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-greay-200"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="message" className="mb-2 text-gray-700">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here."
            variant="outline"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-greay-200"
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2"
        >
          Send
        </Button>
      </div>
    </section>
  );
}

export default Contact;
