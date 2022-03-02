import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Login from "@views/login";
import InviteCode from "@views/inviteCode";
import MainView from "@views/index.jsx";
import AdminLayout from "@layouts/adminLayout";
import AdminUsersManage from "@views/admin/ManageUsers";
import AdminAuth from "@views/admin/auth";
import { setCredentials } from "@store/slices/auth.slice";

const MainRoutes = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const isAdmin = () => {
    return !!(user && (user.role == 'admin' || user.role == 'superadmin'));
  }

  const adminAuthRedirect = element => {
    if (isAdmin())
      return element;
    return <Navigate to='/admin/auth' />
  }

  if (sessionStorage.jwtToken && !user) {
    try {
      let decoded = jwt_decode(sessionStorage.jwtToken);
      dispatch(setCredentials({ user: decoded, token: sessionStorage.jwtToken }));
    } catch (err) {

    }
  }

  return (
    <Router>
      <Routes>
        <Route path='/auth' exact element={<Login />} />
        <Route path='/admin'>
          <Route path='/admin' element={ <Navigate to='/admin/auth' /> } />
          <Route path='/admin/auth' element={ <AdminAuth /> } />
          <Route path='/admin/users' element={ adminAuthRedirect(<AdminLayout><AdminUsersManage /></AdminLayout>) } />
        </Route>
        <Route path='/*' element={<MainView />} />
        <Route path='/' element={<InviteCode />} />
      </Routes>
    </Router>
  )
};

export default MainRoutes;