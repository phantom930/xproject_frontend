import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from "@views/login";
import MainView from "@views/index.jsx";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<MainView />} />
      </Routes>
    </Router>
  )
};

export default MainRoutes;