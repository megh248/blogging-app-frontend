import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useNavigate } from "react-router-dom";
import * as actions from '../redux/User/userActions';
import { useEffect, useRef, useState } from 'react';

const Dashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const effectRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if(effectRef.current === false){
      handleGetUserProfile();
      return () => {
        effectRef.current = true;
      }
    }
  },[]);
  const handleGetUserProfile = async () => {
    try {
      const response = await actions.getUserProfile();
      console.log(response);
      if (response) {
        setUser(response);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  if(isLoading){
    return <h2>Loading....</h2>
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
