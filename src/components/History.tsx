const History = () => {
    return (
        <div id='history' className='bg-persian-orange'>
            <div className='text-[32px] sm:text-[64px] text-white text-center'>HISTORY</div>
            <div className='flex flex-col gap-[30px] pt-[40px] pb-[40px]'>
                <div className='flex flex-col w-[90%] sm:w-auto px-2 sm:px-5 h-[300px] bg-desert-sand rounded-xl m-auto'>
                    <div className='text-[26px] sm:text-[32px] text-white text-center'>PIROGRAMMING</div>
                    <div className='h-full flex gap-3 sm:gap-15 items-center justify-around'>
                        <img src="/images/Pirogramming.png" className='w-[170px] sm:w-[250px] md:w-[400px] rounded-xl' alt='피로그래밍' />
                        <div className='flex flex-col gap-4'>
                            <div className='text-[12px] sm:text-[24px] text-white'>대학생연합 IT동아리</div>
                            <div className='text-[12px] sm:text-[24px] text-white'>2024.12 - 2025.02</div>
                            <div className='text-[12px] sm:text-[24px] text-white'>FullStack</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[90%] sm:w-auto px-2 sm:px-5 h-[300px] bg-desert-sand rounded-xl m-auto'>
                    <div className='text-[24px] sm:text-[32px] text-white text-center'>SKKUDING</div>
                    <div className='h-full flex gap-3 sm:gap-15 items-center justify-around'>
                        <img src="/images/skkuding.png" className='w-[170px] sm:w-[250px] md:w-[400px] rounded-xl' alt='피로그래밍' />
                        <div className='flex flex-col gap-4'>
                            <div className='text-[12px] sm:text-[24px] text-white'>교내 개발 동아리</div>
                            <div className='text-[12px] sm:text-[24px] text-white'>2024.08 - 2025.08</div>
                            <div className='text-[12px] sm:text-[24px] text-white'>Backend</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[90%] sm:w-auto px-2 sm:px-5 h-[300px] bg-desert-sand rounded-xl m-auto'>
                    <div className='text-[24px] sm:text-[32px] text-white text-center'>Spoeum</div>
                    <div className='h-full flex gap-3 sm:gap-15 items-center justify-around'>
                        <img src="/images/Spoeum.png" className='w-[170px] sm:w-[250px] md:w-[400px] rounded-xl' alt='피로그래밍' />
                        <div className='flex flex-col gap-4'>
                            <div className='text-[12px] sm:text-[24px] text-white'>산학협력프로젝트</div>
                            <div className='text-[12px] sm:text-[24px] text-white'>2025.04 - 2025.12</div>
                            <div className='text-[12px] sm:text-[24px] text-white'>FullStack</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
