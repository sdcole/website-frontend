import './App.css';


import Header from './components/Header/Header.component';
import Content from './components/Content/Content.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <div className="App">
      <div id="Container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
