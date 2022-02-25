import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from "../views/login";
import Dashboard from '../views/main/Dashboard'

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
};

export default MainRoutes;