
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Private = ({ childern }) => {
    const location = useLocation()

    return (

        sessionStorage.getItem("username") ? childern : <Navigate to="/login" replace state={{ from: location }} />

    );
};

export default Private;