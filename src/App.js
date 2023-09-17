import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Sign from './Components/Sign';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/sign' element={<Sign />} />
    </Routes>
  );
}

export default App;
