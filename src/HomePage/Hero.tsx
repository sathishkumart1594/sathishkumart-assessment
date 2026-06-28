import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => 
{
    return (
    <section id="home" className="relative h-550px bg-[#111111] flex justify-center items-center overflow-hidden p-7 pb-30">

     {/* Background text */}
     <h1 className="absolute text-[150px] font-black text-transparent uppercase tracking-tight pt-60" 
        style={{WebkitTextStroke:"1px #253000"}}>DESIGNER UI<br/>AND DEVELOPER FRONT</h1>
        
     {/* Center content */}
     <div className="relative z-10 text-center">
        <p className="text-lime-400 font-bold text-xl">Hey There I'm</p>
        <h2 className="text-lime-400 font-black font-humane text-[150px] leading-none">RAHUL</h2>
        <p className="text-lime-400 font-semibold">Currently Studying Computer Science <br/>and Engineering</p>
        <div className="flex justify-center gap-6 mt-5 text-lime-400 text-3xl">
        <FaLinkedin />
        <FaGithub />
        </div>
     </div>
    </section>
 )
}


export default Hero;