import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] px-8 pb-10">
      <div
        className="
        max-w-6xl
        mx-auto
        bg-[#1A1D24]
        rounded-xl
        px-10
        py-10
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-40 md:w-52"
          />
        </div>

        {/* Right Text */}
        <div className="text-right">

          <h2
            className="
            font-black
            uppercase
            leading-none
            text-[55px]
            "
          >
            <span className="text-gray-500">Designing the </span>

            <span className="text-[#D8FF2F]">
              extraordinary
            </span>

            <br />

            <span className="text-gray-500">one </span>

            <span className="text-[#D8FF2F]">
              pixel
            </span>

            <span className="text-gray-500">
              {" "}at a time.
            </span>

          </h2>

          <p className="text-gray-500 text-sm mt-4">
            Portfolio v2.3 © 2024 Rahul
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;