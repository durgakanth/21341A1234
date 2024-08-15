import React, { useState } from 'react';
import axios from 'axios';

function AverageCalculator() {
    const [numberId, setNumberId] = useState('p');
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/numbers/${numberId}`);
            setResponse(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Average Calculator</h1>
            <label>
                Select number type:
                <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
                    <option value="p">Prime</option>
                    <option value="f">Fibonacci</option>
                    <option value="e">Even</option>
                    <option value="r">Random</option>
                </select>
            </label>
            <button onClick={fetchData}>Calculate Average</button>

            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default AverageCalculator;
