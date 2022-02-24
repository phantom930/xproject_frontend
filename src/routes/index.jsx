import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from "../views/Login";

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