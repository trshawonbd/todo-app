import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/Dashboard/AddTask';
import AllTasks from './Pages/Dashboard/AllTasks';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
        <Route index element={<AllTasks></AllTasks>} />
        <Route path='/addTask' element={<AddTask></AddTask>} />
           {/* <Route path='myreview' element={} /> */}
           {/* <Route path='myhistory' element={<MyHistory></MyHistory>} /> */}

        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>
        
    </div>
  );
}

export default App;
