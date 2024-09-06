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
            console.error('Error adding availability:', error);
        }
    };

    return (
        <div className="availability-container">
            <h1>Set Your Availability</h1>
            <form className="availability-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="start-time">Start Time:</label>
                    <input
                        type="datetime-local"
                        id="start-time"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="end-time">End Time:</label>
                    <input
                        type="datetime-local"
                        id="end-time"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="duration">Duration (minutes):</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <button className="button" type="submit">Add Availability</button>
            </form>
        </div>
    );
};

export default AvailabilityForm;
