import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get('/api/users');
                setUsers(result.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
