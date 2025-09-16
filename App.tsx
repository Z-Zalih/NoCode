
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { AuthContext, User } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';
import PreviewPage from './pages/PreviewPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string) => setUser({ email });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <PortfolioProvider>
                <HashRouter>
                    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
                        <Header />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/builder" element={user ? <BuilderPage /> : <Navigate to="/login" />} />
                                <Route path="/preview/:id" element={<PreviewPage />} />
                                <Route path="/admin" element={user ? <AdminPage /> : <Navigate to="/login" />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </HashRouter>
            </PortfolioProvider>
        </AuthContext.Provider>
    );
};

export default App;
