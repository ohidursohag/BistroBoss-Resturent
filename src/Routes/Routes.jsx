import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenuPage";
import OurShopPage from "../Pages/OurShopPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/ContactUs";
import DashBord from "../LayOuts/DashBord";
import DashBoardHome from "../Pages/DashBoard/User/UserHome";
import Reservation from "../Pages/DashBoard/User/Reservation";
import PaymentHistory from "../Pages/DashBoard/User/PaymentHistory";
import MyCart from "../Pages/DashBoard/User/MyCart";
import UserAddReviews from "../Pages/DashBoard/User/UserAddReviews";
import MyBookings from "../Pages/DashBoard/User/MyBookings";
import MakePayment from "../Pages/DashBoard/User/MakePayment";
import Error from "../Pages/Error";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/DashBoard/Admin/AddItems";
import UpdateItems from "../Pages/DashBoard/Admin/UpdateItems";
import ManageItems from "../Pages/DashBoard/Admin/ManageItems";
import ManageBoookings from "../Pages/DashBoard/Admin/ManageBoookings";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";

// import AdminPanel from "../LayOuts/AdminPanel";


const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error/>,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: 'our-menu',
            element: <OurMenu />,
         },
         {
            path: 'our-shop/:category',
            element: <OurShopPage />,
         },
         {
            path: 'contact-us',
            element: <ContactUs />,
         },
      ],
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/register',
      element: <Register />
   },
   {
      path: '/dashboard',
      element: <PrivateRoute>
         <DashBord />
      </PrivateRoute>,
      children: [
         {
            path: 'admin/home',
            element: <AdminRoute>
               <AdminHome />
            </AdminRoute>
         },
         {
            path: 'admin/add-items',
            element: <AdminRoute>
               <AddItems />
            </AdminRoute>
         },
         {
            path: 'admin/update-item/:id',
            element: <AdminRoute>
               <UpdateItems />
            </AdminRoute>
         },
         {
            path: 'admin/manage-items',
            element: <AdminRoute>
               <ManageItems />
            </AdminRoute>
         },
         {
            path: 'admin/manage-bookings',
            element: <AdminRoute>
               <ManageBoookings />
            </AdminRoute>
         },
         {
            path: 'admin/all-users',
            element: <AdminRoute>
               <AllUsers />
            </AdminRoute>
         },
         {
            path: 'user/home',
            element: <PrivateRoute>
               <DashBoardHome />
            </PrivateRoute>
         },
         {
            path: 'user/reservstion',
            element: <PrivateRoute>
               <Reservation />
            </PrivateRoute>
         },
         {
            path: 'user/make-payment',
            element: <PrivateRoute>
               <MakePayment />
            </PrivateRoute>
         },
         {
            path: 'user/payment-history',
            element: <PrivateRoute>
               <PaymentHistory />
            </PrivateRoute>
         },
         {
            path: 'user/my-cart',
            element: <PrivateRoute>
               <MyCart />
            </PrivateRoute>
         },
         {
            path: 'user/add-review',
            element: <PrivateRoute>
               <UserAddReviews />
            </PrivateRoute>
         },
         {
            path: 'user/my-booking',
            element: <PrivateRoute>
               <MyBookings />
            </PrivateRoute>
         },
      ]
   },
   // {
   //    path: '/admin',
   //    element: <AdminRoute>
   //       <AdminPanel />
   //    </AdminRoute>,
   //    children: [
   //       {
   //          path: 'home',
   //          element: <AdminRoute>
   //             <AdminHome />
   //          </AdminRoute>
   //       },
   //       {
   //          path: 'add-items',
   //          element: <AdminRoute>
   //             <AddItems />
   //          </AdminRoute>
   //       },
   //       {
   //          path: 'update-item/:id',
   //          element: <AdminRoute>
   //             <UpdateItems />
   //          </AdminRoute>
   //       },
   //       {
   //          path: 'manage-items',
   //          element: <AdminRoute>
   //             <ManageItems />
   //          </AdminRoute>
   //       },
   //       {
   //          path: 'manage-bookings',
   //          element: <AdminRoute>
   //             <ManageBoookings />
   //          </AdminRoute>
   //       },
   //       {
   //          path: 'all-users',
   //          element: <AdminRoute>
   //             <AllUsers />
   //          </AdminRoute>
   //       },
   //    ]
   // },
   
]);

export default myCreatedRoutes;