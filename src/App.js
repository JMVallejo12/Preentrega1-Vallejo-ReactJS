import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'
        element = {
         <ItemListContainer greeting={"Este es el mensaje de la prop greeting"}/>

        }
        ></Route>
        
        <Route path='/category/:catID' element={
         <ItemListContainer greeting={"Este es el mensaje de la prop greeting"}/>

        }/>

        <Route path='/item/:ID' element={
          <ItemDetailContainer />
        } />

      </Routes>
    </>
  );
}

export default App;
