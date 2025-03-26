import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Special from './pages/Special';
import Snacks from './pages/Snacks';
import Bevereges from './pages/Bevereges';
import About from './pages/About';
import Clogin from './pages/Clogin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import AddMenu from './pages/AddMenu';
import UpdateMenu from './pages/UpdateMenu';
import DeleteMenu from './pages/DeleteMenu';
import PendingOrders from './pages/PendingOrders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar></Navbar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='Special' element={<Special></Special>}></Route>
        <Route path='Snacks' element={<Snacks></Snacks>}></Route>
        <Route path='Bevereges' element={<Bevereges></Bevereges>}></Route>
        <Route path='About' element={<About></About>}></Route>
        <Route path='Clogin' element={<Clogin></Clogin>}></Route>
        <Route path='Login' element={<Login></Login>}></Route>
        <Route path='Signup' element={<Signup></Signup>}></Route>
        <Route path='Orders' element={<Orders></Orders>}></Route>
        <Route path='Cart' element={<Cart></Cart>}></Route>
        <Route path='AddMenu' element={<AddMenu></AddMenu>}></Route>
        <Route path='UpdateMenu' element={<UpdateMenu></UpdateMenu>}></Route>
        <Route path='DeleteMenu' element={<DeleteMenu></DeleteMenu>}></Route>
        <Route path='PendingOrders' element={<PendingOrders></PendingOrders>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
