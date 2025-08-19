import React, { useMemo } from 'react'

const Dashboard = () => {
    const user = useMemo(() => {
        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
    }, []);
  return (
    <div>Welcome, {user?.name}</div>
  )
}

export default Dashboard