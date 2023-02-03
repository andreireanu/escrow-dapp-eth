import styles from "../styles/ConnectWallet.module.css";
import Web3 from 'web3';

const handleClick = () => {
    sendTransaction();
};

const ABI = [{ "inputs": [{ "internalType": "address", "name": "_logic", "type": "address" }, { "internalType": "address", "name": "admin_", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "admin_", "type": "address" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "changeAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "implementation", "outputs": [{ "internalType": "address", "name": "implementation_", "type": "address" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

const ADDRESS = "0x2EB9fd322Fa127cDeD612896607BA4870f66e7ee"

const sendTransaction = async () => {


    var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    console.log("--");
    console.log(web3);
    console.log("--");
    // console.log(web3.eth.accounts[0]);
    console.log("--");


    const contract = new web3.eth.Contract(ABI, ADDRESS, {
        from: web3.eth.accounts[0],
        gas: '20000000000'
    })
    console.log(contract);
    let tx = await contract.methods.send_token().call({ 'from': web3.eth.accounts[0] });
    console.log(tx);
};


const Logged = ({
    onPressLogout,
    address }) => {
    return (
        <div>
            <button type="button" className={styles["connect-wallet"]} onClick={handleClick}>
                Transaction
            </button>
            <h3>Address {address}</h3>
            <button onClick={onPressLogout} className={styles["connect-wallet"]}>
                Disconnect
            </button>
        </div>


    );
};

export default Logged;