import logo from './logo.svg';
import './App.css';
import WorldMap from './pages/WorldMap/Worldmap';
import Header from './components/Sections/Header/Header';

function App() {
  return (
    <div className="App">
      <section>
        <Header></Header>
      </section>
      <section>
        <WorldMap></WorldMap>
      </section>
    </div>
  );
}

export default App;
