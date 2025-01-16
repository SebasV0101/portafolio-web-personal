import { FC } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={link} className="mt-4 inline-block text-blue-600 hover:underline">
        Ver más
      </a>
    </div>
  );
};

export default ProjectCard;
