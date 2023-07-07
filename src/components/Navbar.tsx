import { GoHome, GoSearch, GoHomeFill } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <section className="flex justify-around px-2 py-3 text-white sticky bottom-0 w-full bg">
            <Link to="/feed">
                {location.pathname === '/feed' ? <GoHomeFill className="text-white text-3xl" /> : <GoHome className="text-white text-3xl" />}
            </Link>
            <GoSearch className="text-white text-3xl" />
            <FaRegPenToSquare className="text-white text-3xl" />
            <AiOutlineHeart className="text-white text-3xl" />
            <Link to="/profile">
                {location.pathname === '/profile' ? <FaUser className="text-white text-3xl" /> : <FaRegUser className="text-white text-3xl" />}

            </Link>
        </section>
    )
}

export default Navbar