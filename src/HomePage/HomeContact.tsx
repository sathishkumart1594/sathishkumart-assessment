import { FaInstagram, FaYoutube, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-[#111111] py-10 px-6">
      <div
        className="
        max-w-6xl
        mx-auto
        bg-[#D8FF2F]
        rounded-xl
        p-10
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-8
        "
      >
        {/* Left Side */}
        <div>
          <h2 className="text-6xl font-black text-black mb-4">
            Get in Touch
          </h2>

          <p className="text-black leading-7 max-w-md">
            If you are interested in my work or want to provide feedback
            about this website, I am open to exchanging ideas.
          </p>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right">
          <p className="font-semibold text-black mb-4">
            Follow me on
          </p>

          <div className="flex justify-center md:justify-end gap-5 text-3xl text-black mb-6">
            <FaInstagram className="hover:scale-110 hover:text-pink-600 transition-all cursor-pointer" />

            <FaYoutube className="hover:scale-110 hover:text-red-600 transition-all cursor-pointer" />

            <FaBehance className="hover:scale-110 hover:text-blue-600 transition-all cursor-pointer" />

            <FaLinkedin className="hover:scale-110 hover:text-blue-800 transition-all cursor-pointer" />

            <FaGithub className="hover:scale-110 transition-all cursor-pointer" />
          </div>

          <button
            className="
            bg-[#111111]
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-black
            transition
            "
          >
            Contact Me →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;