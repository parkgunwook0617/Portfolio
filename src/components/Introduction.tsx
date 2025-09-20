import '../styling/index.css'
import BlurText from './animation/BlurText';
import Magnet from './animation/Magnet';
import { useState } from 'react';

const Introduction = () => {
    const [isEnd, setIsEnd] = useState(false)

    const onAnimationComplete = () => {
        setIsEnd(true);
    };

    return (
        <section id='about' className='pt-40 pb-40 bg-paynes-grey text-white h-[1300px] flex flex-col justify-center'>
            <BlurText
                text="안녕하세요! 웹 개발자 박건욱입니다."
                delay={150}
                animateBy="words"
                direction="top"
                className="justify-center text-[64px] mb-3"
            />
            <BlurText
                text="Full-Stack Developer"
                delay={150}
                animateBy="words"
                direction="top"
                className={`justify-center text-[32px] mb-12 ${isEnd ? '' : 'pb-13.5'} `}
                onAnimationComplete={onAnimationComplete}
            />
            {isEnd && (
                <Magnet padding={200} disabled={false} magnetStrength={15} className='w-full' innerClassName='w-70 text-[24px] text-center border rounded-full mx-auto p-2'>
                    <a href='#projects'>프로젝트 보러가기</a>
                </Magnet>
            )}
        </section >
    );
}

export default Introduction;