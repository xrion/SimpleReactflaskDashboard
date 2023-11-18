import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/dashboard/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setDashboardData(response.data);
            } catch (error) {
                if (error.response) {
                    // Handle responses out of the range of 2xx
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Error fetching dashboard data');
                }
            }
        };

        fetchDashboardData();
    }, []);

    if (!dashboardData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="user-details">
                <p>Username: {dashboardData.username}</p>
                {/* Render more user data as needed */}
            </div>
        </div>
    );
}

export default Dashboard;
