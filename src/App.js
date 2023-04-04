import { AppBar } from '@mui/material';
import './App.css';
import Appbar from './components/Appbar';
import AccountCredentialFields from './components/AccountCreds';

function App() {
  return (
    <div className="App">
      
      <Appbar/>
      <AccountCredentialFields/>

    </div>
  );
}

export default App;
