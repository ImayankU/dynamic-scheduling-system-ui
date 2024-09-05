import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import SessionManagement from '../components/SessionManagement';

const AdminPage = () => {
    return (
        <div>
            <AdminDashboard />
            <SessionManagement />
        </div>
    );
};

export default AdminPage;
