import { ExperienceInfo } from "@/types/experienceInfo.types";

export function ExperienceCards({ isFirstCard=true, experienceInfo }: { isFirstCard?: boolean, experienceInfo: ExperienceInfo }) {

    const { companyName, description, tags, time, title } = experienceInfo


    return (
        <div className='w-[90%] lg:w-[80%] min-h-[240px] lg:h-60 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 shadow-sm p-4 lg:p-8' style={{ marginTop: isFirstCard ? 20 : 0 }}>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-0'>
            <h3 className='text-lg lg:text-xl font-semibold text-gray-900 dark:text-white'>{title}</h3>
            <div className='rounded-md bg-[#e75e30] p-1 self-start lg:self-auto'>
              <p className='text-xs lg:text-sm text-white font-medium'>{time.start} - {time.end}</p>
            </div>
          </div>
          <p className='text-[#008a91] dark:text-cyan-400 font-semibold mt-3'>{companyName}</p>
          <p className='mt-4 lg:mt-8 text-sm lg:text-base text-gray-700 dark:text-gray-300'>{description}</p>
          <div className='flex flex-wrap gap-2 lg:w-[70%]'>
            {tags.map((tagName, index) => {
              return (
                <div key={index} className='border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-md flex justify-center items-center p-1 mt-4 lg:mt-7'>
                  <p className='text-xs font-medium text-gray-700 dark:text-gray-300'>{tagName}</p>
                </div>
              )
            })}
          </div>
        </div>
    )
}