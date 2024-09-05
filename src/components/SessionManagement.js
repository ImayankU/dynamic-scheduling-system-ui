import React, { useState } from 'react';
import axios from 'axios';

const SessionManagement = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [attendees, setAttendees] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/sessions', { user: 'user@example.com', start, end, attendees });
            alert('Session scheduled successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Start Time:
                <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
            </label>
            <label>
                End Time:
                <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
            </label>
            <label>
                Attendees (comma-separated emails):
                <input
                    type="text"
                    value={attendees.join(', ')}
                    onChange={(e) => setAttendees(e.target.value.split(', '))}
                />
            </label>
            <button type="submit">Schedule Session</button>
        </form>
    );
};

export default SessionManagement;
