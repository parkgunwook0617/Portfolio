import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <nav className={`sticky flex justify-between top-0 p-4 pl-20 pr-20 bg-paynes-grey
            ${isScrolled ? 'shadow-xl/20 transition-all duration-300 ease-in-out bg-white' : 'transition-shadow duration-300 ease-in-out'}`}>
            <h1 className='font-semibold text-desert-sand'>PGW Portfolio</h1>
            <div className='flex w-md justify-between font-medium space-x-6'>
                <Link to={'/'} className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    About
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to={'/'} className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    Skills
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to={'/'} className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    Projects
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to={'/'} className={`group relative ${isScrolled ? 'text-paynes-grey' : 'text-white'}`}>
                    History
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-paynes-grey' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;