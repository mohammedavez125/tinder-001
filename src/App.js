import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App"> 
      {/* header  */}
      <Header />
      {/* middle card */}
      <TinderCards />
      
      {/* Bottom Buttons*/}
      <Bottom />
       
    </div>
  );
}

export default App;
