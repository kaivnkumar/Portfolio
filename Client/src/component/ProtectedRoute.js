import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
 
const ProtectedRoutes = () => {

    const cookies = new Cookies();

    const token = cookies.get('jwt');

    return(
        token ? <Outlet/> : <Navigate to="/lock"/>
    )
}

export default ProtectedRoutes
