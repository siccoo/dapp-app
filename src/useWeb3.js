import {useState, useEffect} from 'react';
import Web3 from 'web3';

const useWeb3 = () => {
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        var instance;

        if (window.ethereum) {
            try {
                instance = new Web3(window.ethereum);
            } catch(error) {
                console.error(error)
            } 
        } else if(window.web3) {
            instance = new Web3(window.web3);
        } else {
            // FALLBACK ON LOCAL NETWORK
            const provider = new Web3.provider.HttpProvider("http://127.0.0.1:7545");
            instance = new Web3(provider);
        }

        setWeb3(instance);
    }, [])

    return web3
}

export default useWeb3
