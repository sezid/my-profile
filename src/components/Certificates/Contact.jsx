import React from "react";
import { assets } from "../../assets/images";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col md:flex-row bg-white w-[350px] md:w-3/5 items-center justify-center rounded-[15px] gap-5 p-10">
        <div className="flex flex-col items-center md:items-start md:text-xl gap-5">
          <img
            className="w-[150px] md:w-1/2 rounded-lg"
            src={assets.headshot}
            alt=""
          />
          <h1 className="text-2xl text-center md:text-start md:text-3xl">
            Syed Saleh Mohammad Sajid
          </h1>
          <h4 className="text-center md:text-start md:text-2xl">
            IT Project Analyst, LIIA Smart Inc.
          </h4>
          <div className="text-center md:text-start">
            <h5>salehsajid86@gmail.com</h5>
            <h5>+880-1775289400</h5>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://github.com/sezid">
              <img className="w-[30px]" src={assets.github} alt="" />
            </a>
            <a href="https://www.facebook.com/itssezid">
              <img className="w-[30px]" src={assets.facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/sezid">
              <img className="w-[30px]" src={assets.linkedin} alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full md:w-2/3">
          <h2 className="text-3xl text-center md:text-start md:4xl font-semibold">
            Contact Me
          </h2>

          <form
            className="flex flex-col gap-3"
            name="contact"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default Netlify redirect
              const form = e.target;
          
              fetch("/", {
                method: "POST",
                body: new FormData(form),
              })
                .then(() => window.location.href = "/thank-you") // Force Redirect
                .catch((error) => console.error("Submission Error:", error));
            }}
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-2 border rounded-lg w-full"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-2 border rounded-lg w-full"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="p-2 border rounded-lg w-full h-24"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-stone-400 text-white p-2 rounded-lg hover:bg-stone-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
