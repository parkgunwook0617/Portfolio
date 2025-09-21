import { useEffect, useState } from 'react'
import '../styling/index.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`sticky flex gap-4 justify-between top-0 p-4 text-[12px] sm:text-[16px] sm:pl-4 sm:pr-4 md:pl-20 md:pr-20 bg-paynes-grey
            ${isScrolled ? 'shadow-xl/20 transition-all duration-300 ease-in-out bg-white' : 'transition-shadow duration-300 ease-in-out'}`}>
            <h1 className='text-[7px] sm:text-[12px] font-semibold text-desert-sand'>PGW Portfolio</h1>
            <div className='flex w-md justify-around font-medium'>
                <a href='#about' className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    About
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </a>
                <a href='#skills' className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    Skills
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </a>
                <a href='#projects' className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    Projects
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </a>
                <a href='#history' className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    History
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;