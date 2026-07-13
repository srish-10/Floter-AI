import { useState } from "react";
import queryTypes from "../../data/queryTypes";
import ConfirmationModal from "./ConfirmationModal";
import SuccessToast from "./SuccessToast";
import useLocalStorage from "../../hooks/useLocalStorage";

const initialState = {
  name: "",
  email: "",
  type: "",
  message: "",
};

const STORAGE_KEY  = "contact-form-data"

const ContactForm = () => {

  const [form, setForm,clearForm] = useLocalStorage(STORAGE_KEY,initialState);

  const [showModal, setShowModal] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setShowModal(true);

  };

  const confirmSubmit = () => {

    setShowModal(false);

    setShowToast(true);
    clearForm();

    setTimeout(() => {

      setShowToast(false);

      setForm(initialState);

    }, 3000);

  };

  return (
    <>

      <form
      id="questions"
        onSubmit={handleSubmit}
        className="bg-blue-50 rounded-3xl shadow-xl p-8 space-y-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-4"
        >

          <option value="">
            Select Query Type
          </option>

          {queryTypes.map((type) => (

            <option
              key={type}
              value={type}
            >
              {type}
            </option>

          ))}

        </select>

        <textarea
          rows="5"
          name="message"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-4 resize-none"
        />

        <button
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>

      {showModal && (

        <ConfirmationModal
          form={form}
          onCancel={() => setShowModal(false)}
          onConfirm={confirmSubmit}
        />

      )}

      {showToast && <SuccessToast />}

    </>
  );

};

export default ContactForm;