import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
 
const ProtectedRoutes = () => {

    const cookies = new Cookies();

    const token = cookies.get('jwt');
    console.log(cookies.get('jwt'),"hvdrsgdfg");

    return(
        token ? <Outlet/> : <Navigate to="/lock"/>
    )
}

export default ProtectedRoutes
