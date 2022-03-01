import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from "@views/dashboard";
import Robotics from "@views/robotics";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/robotics' element={<Robotics />} />
    </Routes>
  )
};

export default MainRoutes;