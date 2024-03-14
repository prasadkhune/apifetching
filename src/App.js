import logo from './logo.svg';
import './App.css';
import Try from './Component/Try';
import News from './Component/News';
import Weddingpic from './Component/Weddingpic';
import Navbar from './Component/Navbar';
import Nabbar from './Component/Nabbar';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Weddingvid from './Component/Weddingvid';
import Weddingprepic from './Component/Weddingprepic';
import Contactus from './Component/Contactus';
import Explore from './Component/Explore';

function App() {
  return (
    <>
   {/* <Try></Try> */}
  {/* <News></News> */}
{/* <Navbar></Navbar> */}
<BrowserRouter>
<Nabbar></Nabbar>
<Routes>

<Route path="/Weddingpic" element={<Weddingpic/>}></Route>
<Route path="/Weddingvid" element={<Weddingvid/>}></Route>
<Route path="/Weddingprepic" element={<Weddingprepic/>}></Route>
<Route path="/Contactus" element={<Contactus/>}></Route>
<Route path="/Explore" element={<Explore/>}></Route>


</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
