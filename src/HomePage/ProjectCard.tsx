interface ProjectCardProps 
{
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const ProjectCard = ({image, title,subtitle,description,}: ProjectCardProps) => 
{
  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
      
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover"/>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-[#C6FF00] text-sm mt-1">{subtitle}</p>
        <p className="text-gray-300 text-sm mt-3 leading-6">{description}</p>

        {/* Technology Tags */}
        <div className="flex gap-2 mt-5">
          <span className="bg-yellow-500 px-3 py-1 rounded text-xs font-bold">JS</span>
          <span className="bg-blue-500 px-3 py-1 rounded text-xs font-bold">React</span>
          <span className="bg-cyan-500 px-3 py-1 rounded text-xs font-bold">CSS</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;