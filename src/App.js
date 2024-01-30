
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
       <Route path='/' element={
        <Homeg />
       }>

       </Route>
    </Routes>
  );
}

export default App;
