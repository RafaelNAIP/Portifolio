'use client'
import Image from "next/image";

import GitHubIcon from "@mui/icons-material/GitHub";
import IosShareIcon from "@mui/icons-material/IosShare";
import { ProjectCardType } from "@/types/project.types";

export function ProjectCard({ cardProject }: { cardProject: ProjectCardType }) {
  const { title, description, logo, tags, projectLink, githubLink } = cardProject;

  const redirectToProject = () => {
    if (projectLink) window.location.href = projectLink;
  }

  const redirectToGithub = () => {
    if (githubLink) window.location.href = githubLink;
  }

  return (
    <div className="h-fit bg-white dark:bg-gray-800 w-full 2xl:w-[70%] 2xl:pb-0 lg:w-[90%] lg:pb-3 border border-gray-300 dark:border-gray-600 rounded-xl">
      <div className="relative w-full h-36 lg:h-48 overflow-hidden border-primary/20 mt-4 lg:mt-6">
        <Image src={logo} alt={title} fill />
      </div>
      <div className="relative w-full 2xl:h-70 overflow-hidden border-primary/20 mt-4 lg:mt-6 px-4 lg:px-7 pb-4 lg:pb-0">
        <p className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white 2xl:mb-4 lg:mb-8 xl:mb-1 ">{title}</p>
        <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 2xl:mt-4 lg:mt-7 xl:mt-1">
          {tags.map((tagName, index) => {
            return (
              <div key={index} className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-md flex justify-center items-center p-1">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{tagName}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 lg:gap-0">
          <button onClick={redirectToProject} className="bg-[#008a91] p-2 rounded-md text-white text-xs lg:text-sm flex items-center gap-1 lg:gap-2 px-2 lg:px-3 mt-4 lg:mt-5 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <IosShareIcon htmlColor="#FFFFFF" fontSize="small" />
            Live
          </button>
          <button onClick={redirectToGithub} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md flex items-center gap-1 lg:gap-2 mt-4 lg:mt-5 px-2 lg:px-2 lg:ml-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <GitHubIcon fontSize="small" />
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
