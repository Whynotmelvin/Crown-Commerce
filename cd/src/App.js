import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.components';

const Shop =() =>{
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Home />}>
        <Route path='shop' element ={<Shop/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;