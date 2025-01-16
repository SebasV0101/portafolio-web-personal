import { FC } from "react";

const ContactForm: FC = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Nombre</label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block">Mensaje</label>
        <textarea
          id="message"
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
