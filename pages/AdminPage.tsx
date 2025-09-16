
import React from 'react';

const StatCard: React.FC<{ title: string; value: string; icon: string }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <div className="bg-brand-accent text-white p-4 rounded-full mr-4">
            <span className="text-2xl">{icon}</span>
        </div>
        <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const AdminPage: React.FC = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
                
                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Users" value="1,254" icon="👥" />
                    <StatCard title="Published Portfolios" value="987" icon="📄" />
                    <StatCard title="Active Templates" value="12" icon="🖼️" />
                    <StatCard title="Reported Content" value="3" icon="🚩" />
                </div>

                {/* User Management Table (Placeholder) */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">User Management</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-3">User</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">John Doe</td>
                                    <td className="p-3">john.doe@example.com</td>
                                    <td className="p-3"><span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
                                    <td className="p-3 space-x-2">
                                        <button className="text-blue-600 hover:underline">Edit</button>
                                        <button className="text-red-600 hover:underline">Suspend</button>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">Jane Smith</td>
                                    <td className="p-3">jane.smith@example.com</td>
                                    <td className="p-3"><span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs">Suspended</span></td>
                                     <td className="p-3 space-x-2">
                                        <button className="text-blue-600 hover:underline">Edit</button>
                                        <button className="text-green-600 hover:underline">Activate</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
