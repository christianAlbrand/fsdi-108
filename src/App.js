import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
function App(){
  return(
    <div className = 'App'>
      <Navbar></Navbar>
      <div className='content'>
        <h1>Hello World React!</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App