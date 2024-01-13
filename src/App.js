import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Este es el mensaje de la prop greeting"}/>
    </>
  );
}

export default App;
