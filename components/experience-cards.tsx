export function ExperienceCards({ isFirstCard=true }: { isFirstCard?: boolean }) {
    return (
        <div className='w-[80%] h-60 border border-gray-300 rounded-md bg-[#ffffff] bg-card shadow-sm p-8' style={{ marginTop: isFirstCard ? 20 : 0 }}>
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
        </div>
    )
}