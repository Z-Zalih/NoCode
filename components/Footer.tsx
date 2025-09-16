
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-brand-accent">UniqCvGuy</h3>
                        <p className="mt-2 text-gray-400">Build & Share Your Unique Portfolio.</p>
                        <div className="flex space-x-4 mt-4">
                           <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                           <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                           <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.418 3.582 8.02 8.02 8.02 4.418 0 8.02-3.582 8.02-8.02C20.02 6.477 15.523 2 12 2zm-1.14 14.902H8.354V10.898h2.508v6.004zM9.608 9.952c-.822 0-1.488-.666-1.488-1.488s.666-1.488 1.488-1.488 1.488.666 1.488 1.488-.666 1.488-1.488 1.488zm5.282 6.952h-2.504V13.84c0-.728-.012-1.664-.99-1.664-.99 0-1.144.774-1.144 1.612v3.114H7.742V10.898h2.404v1.028h.034c.312-.59 1.074-1.216 2.25-1.216 2.4 0 2.844 1.58 2.844 3.634v4.16z" clipRule="evenodd" /></svg></SocialIcon>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold">Quick Links</h4>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li><Link to="/#templates" className="text-gray-400 hover:text-white">Templates</Link></li>
                                <li><Link to="/builder" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-semibold">Support</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Legal</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} UniqCvGuy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
