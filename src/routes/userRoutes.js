import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from "@views/dashboard";
import Robotics from "@views/robotics";
import DTCBand from "@views/dtc_band";
import PR from "@views/pr";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/robotics' element={<Robotics />} />
      <Route path='/dtc_brand' element={<DTCBand />} />
      <Route path='/pr' element={<PR />} />
    </Routes>
  )
};

export default UserRoutes;