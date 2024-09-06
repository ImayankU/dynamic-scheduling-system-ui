import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionManagement = () => {
    const [sessions, setSessions] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [sessionDetails, setSessionDetails] = useState({ start: '', end: '', duration: 30, attendees: [] });

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const result = await axios.get('/api/sessions');
                setSessions(result.data);
            } catch (error) {
                console.error('Error fetching sessions:', error);
            }
        };

        fetchSessions();
    }, []);

    const handleSessionSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/sessions', sessionDetails);
            alert('Session scheduled successfully!');
        } catch (error) {
            console.error('Error scheduling session:', error);
        }
    };

    return (
        <div className="session-management">
            <h1>Session Management</h1>
            <form onSubmit={handleSessionSubmit}>
                <div className="input-group">
                    <label htmlFor="user-select">Select User:</label>
                    <select
                        id="user-select"
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        required
                    >
                        {/* Populate this with user options dynamically */}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="session-start">Session Start:</label>
                    <input
                        type="datetime-local"
                        id="session-start"
                        value={sessionDetails.start}
                        onChange={(e) => setSessionDetails({ ...sessionDetails, start: e.target.value })}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="session-end">Session End:</label>
                    <input
                        type="datetime-local"
                        id="session-end"
                        value={sessionDetails.end}
                        onChange={(e) => setSessionDetails({ ...sessionDetails, end: e.target.value })}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="session-duration">Duration (minutes):</label>
                    <input
                        type="number"
                        id="session-duration"
                        value={sessionDetails.duration}
                        onChange={(e) => setSessionDetails({ ...sessionDetails, duration: Number(e.target.value) })}
                        min="1"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="attendees">Attendees (comma-separated emails):</label>
                    <input
                        type="text"
                        id="attendees"
                        value={sessionDetails.attendees.join(', ')}
                        onChange={(e) => setSessionDetails({ ...sessionDetails, attendees: e.target.value.split(',').map(email => email.trim()) })}
                    />
                </div>
                <button type="submit">Schedule Session</button>
            </form>
            <div className="sessions-list">
                <h2>Scheduled Sessions</h2>
                <ul>
                    {sessions.map(session => (
                        <li key={session._id}>
                            {session.start} - {session.end} | {session.attendees.join(', ')}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SessionManagement;
