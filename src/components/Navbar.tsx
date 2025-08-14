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
        <nav className={`sticky flex justify-between top-0 p-4 pl-20 pr-20 bg-white
            ${isScrolled ? 'shadow-xl/20 transition-shadow duration-300 ease-in-out' : 'transition-shadow duration-300 ease-in-out'}`}>
            <h1 className="text-desert-sand font-semibold">PGW Portfolio</h1>
            <div className='flex w-md justify-between text-paynes-grey font-medium space-x-6'>
                <Link to={'/'} className='group relative text-paynes-grey'>
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-paynes-grey transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to={'/'} className='group relative text-paynes-grey'>
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-paynes-grey transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to={'/'} className='group relative text-paynes-grey'>
                    Skills
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-paynes-grey transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to={'/'} className='group relative text-paynes-grey'>
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-paynes-grey transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;