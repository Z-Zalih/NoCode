
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-brand-accent">
                    UniqCvGuy
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-brand-accent transition-colors">Home</Link>
                    <Link to="/#templates" className="text-gray-600 hover:text-brand-accent transition-colors">Templates</Link>
                    {user && <Link to="/builder" className="text-gray-600 hover:text-brand-accent transition-colors">Builder</Link>}
                    {user && <Link to="/admin" className="text-gray-600 hover:text-brand-accent transition-colors">Admin</Link>}
                </nav>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="text-gray-700 hidden sm:block">{user.email}</span>
                            <button onClick={handleLogout} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-600 hover:text-brand-accent transition-colors font-medium">Login</Link>
                            <Link to="/login" className="bg-brand-accent text-white px-4 py-2 rounded-md hover:bg-brand-accent-light transition-colors text-sm font-medium">
                                Start Building
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
