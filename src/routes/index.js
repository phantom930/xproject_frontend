import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from "@views/login";
import InviteCode from "@views/inviteCode";
import MainView from "@views";


const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<MainView />} />
        <Route path='/' element={<InviteCode />} />
      </Routes>
    </Router>
  )
};

export default MainRoutes;