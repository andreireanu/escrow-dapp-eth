import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Logged from '../pages/logged';


import styles from "../styles/ConnectWallet.module.css";

const ConnectWalletButton = ({
    onPressLogout,
    onPressConnect,
    loading,
    address,
}) => {
    return (
        <div>
            {address && !loading ? (
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Logged onPressLogout={onPressLogout} address={address} />} />
                    </Routes>
                </Router>
            ) : loading ? (
                <button
                    className={`${styles["connect-wallet"]} ${styles["connect-button-loading"]}`}
                    disabled
                >
                    <div>Loading...</div>
                </button>
            ) : (
                <button onClick={onPressConnect} className={styles["connect-wallet"]}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default ConnectWalletButton;