import logo from './logo.svg';
import './App.css';
import { Navbar, Hero, Report, AdvertHome } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        
      </header>
      <div className='after-hero'>
        <Report />
        <AdvertHome />
      </div>
      <body>
        
      </body>
    </div>
  );
}

export default App;
