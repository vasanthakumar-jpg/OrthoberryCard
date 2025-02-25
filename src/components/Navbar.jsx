import { FaUpload, FaNewspaper } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="sidebar hidden md:block">
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <FaNewspaper style={{ color: 'gray' }} />
                </li>
                <li className="sidebar-item">
                    <FaUpload style={{ color: 'gray' }} />
                </li>

            </ul>
        </div>
    )
}

export default Navbar