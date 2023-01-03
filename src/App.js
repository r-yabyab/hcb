import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { TopNav } from './components/TopNav';
import { Route, Routes } from 'react-router-dom';
import { Examples } from './components/Examples';
import Info from './components/Info';
import { BottomNav } from './components/BottomNav';

function App() {
  return (
<>
<TopNav />

<div className='min-h-screen bg-cover bg-[#525252] bg-fixed bg-center CustomGradient'>

<Routes>
<Route path='/' element={<HomePage />} />
<Route path='/examples' element={<Examples />} />
{/*  to do
<Route path='/shops'
<Route path='/cash' 
*/}
<Route path='/info' element={<Info />} />
</Routes>

</div>

<BottomNav />
</>
  );
}

export default App;
