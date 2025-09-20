const History = () => {
    return (
        <div className='bg-persian-orange'>
            <div className='text-[42px] text-white text-center'>HISTORY</div>
            <div className='flex flex-col gap-[30px] pt-[40px] pb-[40px]'>
                <div className='flex flex-col w-[70%] h-[300px] bg-desert-sand rounded-xl m-auto'>
                    <div className='text-[32px] text-white text-center'>PIROGRAMMING</div>
                    <div className='h-full flex items-center justify-around'>
                        <img src="/images/Pirogramming.png" className='w-[400px] rounded-xl' alt='피로그래밍' />
                        <div className='flex flex-col gap-4'>
                            <div className='text-[24px] text-white'>대학생 연합 IT 동아리</div>
                            <div className='text-[24px] text-white'>2024.12 - 2025.02</div>
                            <div className='text-[24px] text-white'>FullStack</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[70%] h-[300px] bg-desert-sand rounded-xl m-auto'>
                    <div className='text-[32px] text-white text-center'>SKKUDING</div>
                    <div className='h-full flex items-center justify-around'>
                        <img src="/images/skkuding.png" className='w-[400px] rounded-xl' alt='피로그래밍' />
                        <div className='flex flex-col gap-4'>
                            <div className='text-[24px] text-white'>교내 웹 개발 동아리</div>
                            <div className='text-[24px] text-white'>2024.08 - 2025.08</div>
                            <div className='text-[24px] text-white'>Backend</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[70%] h-[300px] bg-desert-sand rounded-xl m-auto'>
                    <div className='text-[32px] text-white text-center'>Spoeum</div>
                    <div className='h-full flex items-center justify-around'>
                        <img src="/images/Spoeum.png" className='w-[400px] rounded-xl' alt='피로그래밍' />
                        <div className='flex flex-col gap-4'>
                            <div className='text-[24px] text-white'>산학협력프로젝트</div>
                            <div className='text-[24px] text-white'>2025.04 - 2025.12</div>
                            <div className='text-[24px] text-white'>FullStack</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History