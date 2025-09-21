import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Image from 'next/image';
import { ExperienceCards } from '@/components/experience-cards';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="h-18 w-full flex items-center pl-4 pr-10 justify-between border-b border-b-gray-300">
        <h1 className="text-xl font-bold text-foreground">Rafael Mesquita</h1>
        <div className="w-60 flex justify-between">
          <button  >
            <LinkedInIcon color='info' fontSize='large'  />
          </button>
          <button>
            <GitHubIcon fontSize='large' />
          </button>
          <button className='bg-[#008a91] p-2 rounded-md text-white text-sm w-30 flex justify-between pl-5 pr-5'>
            <FileDownloadIcon htmlColor='#FFFFFF' fontSize='small' />
            Resume
          </button>
        </div>
      </header>

      <div className='h-full w-full flex items-center mt-20 flex-col pb-10'>
         <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">About Me</h2>
         <div className='w-[80%] h-150 border border-gray-300 rounded-md bg-[#ffffff] bg-card shadow-sm'>
          <div className='size-full flex'>
            <div className='w-[50%] flex items-center justify-center'>
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-primary/20">
                <Image 
                src="/profile_picture.png"
                alt="Rafael Mesquita - Profile Photo"
                fill
                className='object-cover'
                />
              </div>
            </div>
            <div className='w-[50%] flex justify-center flex-col pr-12'>
              <h3 className='text-2xl font-semibold text-foreground mb-8'>React & React Native Engineer</h3>
              <p className='mb-10 text-lg'>
                I am a software engineer with expertise in React and React Native, building scalable and high-performance applications. Over the past five years, 
                I’ve worked on projects in logistics, energy, and healthcare, always delivering solutions aligned with business goals. 
                My focus is on writing maintainable code, implementing testing practices, and optimizing performance to ensure reliable systems. 
                I enjoy solving complex problems, from large-scale refactors to restoring critical production issues under tight deadlines.</p>
              <p className='text-lg'>
                Beyond development, I value collaboration and mentoring, helping teams follow best practices and improve code quality. 
                I’ve introduced TDD/BDD workflows, streamlined CI/CD pipelines, and led the delivery of enterprise applications ahead of schedule. 
                For me, software development is about creating resilient and impactful systems that truly support users and businesses. 
                I thrive in environments where innovation and practicality work hand in hand.
              </p>
            </div>
          </div>
         </div>
        <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)] mt-20">Experience</h2>
        {/* <div className='w-[80%] h-60 border border-gray-300 rounded-md bg-[#ffffff] bg-card shadow-sm p-8'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-semibold text-foreground'>React Native Engineer</h3>
            <div className='rounded-md bg-[#e75e30] p-1'>
              <p className='text-sm text-white font-medium'>start - present</p>
            </div>
          </div>
          <p className='text-[#008a91] font-semibold mt-3'>Tech Company Inc.</p>
          <p className='mt-8'>Led development of cross-platform mobile applications serving 100k+ users. Implemented complex features using React Native, Redux, and TypeScript.</p>
          <div className='flex w-[50%]'>
            <div className='border border-gray-300 rounded-md flex justify-center items-center p-1 mt-7'>
              <p className='text-xs font-medium'>React Native</p>
            </div>
            <div className='border border-gray-300 rounded-md flex justify-center items-center p-1 mt-7 ml-2'>
              <p className='text-xs font-medium'>TypeScript</p>
            </div>
            <div className='border border-gray-300 rounded-md flex justify-center items-center p-1 mt-7 ml-2'>
              <p className='text-xs font-medium'>Redux</p>
            </div>
          </div>
        </div> */}
        <ExperienceCards isFirstCard={false}  />
        <ExperienceCards />
        <ExperienceCards />
        <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)] mt-30">Project</h2>
      </div>
    </div> 
  );
}
