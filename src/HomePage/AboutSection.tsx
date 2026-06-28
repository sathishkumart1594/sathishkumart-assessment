

const AboutSection = () => {
  return (
    <section className="flex justify-center px-8 py-10 bg-[#111111]">
      <div className="w-full max-w-6xl bg-[#D8FF2F] rounded-lg px-10 py-10">
        
        {/* Heading */}
        <h2 className="text-center text-4xl font-black text-black mb-8">About</h2>

        {/* Content */}
        <p className="text-black text-[16px] leading-8 text-justify">
          Hi there! I'm Rahul, a third-year Computer Science student at SRM
          Institute with a passion for crafting user-centric experiences. I
          specialize in UI/UX design, front-end development, and graphic design,
          with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS,
          QML, and C++. I thrive on collaboration and bring experience in agile
          scrum methodologies. Beyond coding, I enjoy photography, graphic
          design, and exploring music. Let's connect and bring your digital
          visions to life.
        </p>

        {/* Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-[#1A1A1A] text-white px-6 py-2 rounded-md hover:bg-black transition">More...</button>
        </div>
     </div>
    </section>
  );
};

export default AboutSection;