import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Image from "next/image";
import { ExperienceCards } from "@/components/experience-cards";
import IosShareIcon from '@mui/icons-material/IosShare';
import { ProjectCard } from "@/components/project-card";
import { PortifolioHeader } from "@/components/portifolio-header";
import { AboutSection } from "@/components/about-section";

export default function Home() {

  return (
    <div className="min-h-screen">
      <PortifolioHeader />

      <div className="h-full w-full flex items-center mt-20 flex-col">
        <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
          About Me
        </h2>
        <div className="w-[80%] h-150 border border-gray-300 rounded-md bg-[#ffffff] bg-card shadow-sm">
          <div className="size-full flex">
            <div className="w-[50%] flex items-center justify-center">
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/profile_picture.png"
                  alt="Rafael Mesquita - Profile Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <AboutSection />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)] mt-20">
          Experience
        </h2>
        <ExperienceCards isFirstCard={false} experienceInfo={{ 
          companyName: 'QAT Global',
          description: 'Developed and implement mobile features aligned with business requirements and optimizing using React Native, Redux, Typescript and Expo.', 
          tags: ['React Native', 'Typescript', 'Redux', 'Expo', 'Jest'], 
          time: { start: '2022', end: 'Present' }, 
          title: 'Mobile Engineer (React Native)' }}  
        />
        <ExperienceCards experienceInfo={{ 
          companyName: 'Supero', 
          description: 'Contributed to 4 enterprise projects, where I introduced testing practices, optimized micro-frontend architectures, implemented real-time features using React, React Native, Next with Javascript and Typescript', 
          tags: ['React', 'NextJS', 'React Native', 'Jest', 'Typescript', 'React Testing Library', 'Material UI', 'WebSocket', 'Micro-frontend', 'AWS'], 
          time: { start: '2021', end: '2023' }, 
          title: 'Senior Frontend Developer' 
          }} 
          />
        <ExperienceCards experienceInfo={{ 
          companyName: 'Elev', 
          description: 'Designed and implemented a health tech application that delivers food based on user preferences and allergies, using React Native, React, Redux and Typescript', 
          tags: ['React', 'React Native', 'Typescript', 'WebSocket', 'NodeJS', 'Postgress', 'Play Store'], 
          time: { start: '2020', end: '2021' }, 
          title: 'Fullstack Developer' 
          }} />
        <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)] mt-30">
          Project
        </h2>
        <div className="grid w-full h-150 grid-cols-3 pl-26">
          <ProjectCard 
          cardProject={{ 
            title: 'React Tower Defense Game', 
            description: 'A game made 100% using React/Next with typescript, with a tower defense game feature and accessebility features including keyboard and reduced motion', 
            logo: '/tower_defense_preview.png', 
            tags: ['React', 'NextJS', 'Jest', 'Vercel', 'Tailwind CSS'] }}  
          />
        </div>
        <footer className="border-t border-t-gray-300 h-25 w-full mt-30 flex items-center justify-center">
          <p>© 2025 Rafael Mesquita. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}
