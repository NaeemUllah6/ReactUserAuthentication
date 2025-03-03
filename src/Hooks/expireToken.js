import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tokenexpire = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('dummyToken')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])
}

export default Tokenexpire