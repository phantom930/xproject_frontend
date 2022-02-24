import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from "../views/login/index";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/dashborad' />
        <Route path='/login' element={<Login />} />
        <Route path='/' />
      </Routes>
    </Router>
  )
};

export default MainRoutes;