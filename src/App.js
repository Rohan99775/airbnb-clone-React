import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import BottomNavBar from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cards />
      <BottomNavBar />
    </div>
  );
}

export default App;
