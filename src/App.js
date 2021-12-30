import useWeb3 from './useWeb3';
import {useStoreApi} from "./storeApi"

import EthLogo from './ethereum.png';
import './App.css';

const App = () => {
const {address, balance, message, setBalance, setAddress} = useStoreApi();
const web3 = useWeb3();



  return (
    <div className="App">
      <header className="App-header">
        <img src={EthLogo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
