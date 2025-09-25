import Image from "next/image";

import GitHubIcon from "@mui/icons-material/GitHub";
import IosShareIcon from "@mui/icons-material/IosShare";
import { ProjectCardType } from "@/types/project.types";

export function ProjectCard({ cardProject }: { cardProject: ProjectCardType }) {
  const { title, description, logo, tags } = cardProject;

  return (
    <div className="h-full bg-[#ffffff] w-[70%] border border-gray-300 rounded-xl">
      <div className="relative w-full h-48 overflow-hidden border-primary/20 mt-6">
        <Image src={logo} alt="Project name" fill />
      </div>
      <div className="relative w-full h-fill overflow-hidden border-primary/20 mt-6 pl-7 pr-7">
        <p className="text-lg font-semibold text-foreground mb-8">{title}</p>
        <p>{description}</p>
        <div className="flex justify-between w-[80%] ">
          {tags.map((tagName, index) => {
            return (
              <div key={index} className="border border-gray-300 rounded-md flex justify-center items-center p-1 mt-7 ">
                <p className="text-xs font-medium">{tagName}</p>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <button className="bg-[#008a91] p-2 rounded-md text-white text-sm w-18 items-center flex justify-between pl-3 pr-3 mt-5 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <IosShareIcon htmlColor="#FFFFFF" fontSize="small" />
            Live
          </button>
          <button className="border border-gray-300 rounded-md flex justify-between items-center mt-5 w-22 pl-2 pr-2 ml-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <GitHubIcon fontSize="small" />
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
