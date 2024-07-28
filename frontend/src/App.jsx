import './App.css'
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx'
import SignUp from './pages/signup/signUp.jsx';
function App() {

  return (
  <div className='p-4 h-screen flex items-center justify-center'>
      {/*<SignUp/>*/}
      <Home/>
    </div>
  );
}

export default App;
