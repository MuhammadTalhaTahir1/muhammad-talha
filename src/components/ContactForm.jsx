import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validate = () => {
    let errror = {};
    if (!formData.name) error.name = "Name is required";

    if (!formData.email) {
      errror.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Email is invalid";
    }
    if (!formData.message) error.message = "Name is required";
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      setIsSending(true);
      emailjs
        .send(
          "service_bamij1a",
          "template_tp5smbs",
          formData,
          "3U5aobcE_BR4hRI7G"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Failed...", error);
          toast.error("Failed to sent message. Please try again");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="p-4 lg:w-3/4">
      <Toaster />
      <h2 className="my-8 text-center  text-4xl font-semibold  tracking-tighter">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg  border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.name && (
              <p className="text-sm text-rose-800">{error.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg  border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.email && (
              <p className="text-sm text-rose-800">{error.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            rows={6}
            className="mb-8 w-full appearance-none rounded-lg  border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
          />
          {error.message && (
            <p className="text-sm text-rose-800">{error.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border  border-stone-50/30  bg-stone-200 px-4 py-2  text-sm font-semibold text-stone-900 hover:bg-stone-300  ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className=" flex items-center justify-center gap-2 ">
            {isSending ? "Sendeing..." : "Send"}
            <FiSend />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;