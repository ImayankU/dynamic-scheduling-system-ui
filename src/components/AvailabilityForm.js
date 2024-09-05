import React, { useState } from 'react';
import axios from 'axios';

const AvailabilityForm = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [duration, setDuration] = useState(30);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/availability', { user: 'user@example.com', start, end, duration });
            alert('Availability added successfully!');
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
                Duration (minutes):
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </label>
            <button type="submit">Add Availability</button>
        </form>
    );
};

export default AvailabilityForm;
