
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import PropTypes  from "prop-types";


const AdminRoute = ({children}) => {
   const { user, loading } = useAuth();
   const { role, isLoading } = useUserRole();
   

   if (loading || isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (user?.email && role === 'admin') {
      return children;
   }
   return <Navigate to='/Dashboard/user/home' replace={true}></Navigate>;
}

AdminRoute.propTypes = {
   children: PropTypes.node.isRequired
}
export default AdminRoute;