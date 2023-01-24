import React from 'react';
import styles from "../styles/ConnectWallet.module.css";

const Logged = ({
    onPressLogout,
    address }) => {
    return (
        <div>
            <h3>Mail us on feedback@geeksforgeeks.org</h3>
            <h3>Address {address}</h3>
            <button onClick={onPressLogout} className={styles["connect-wallet"]}>
                Disconnect
            </button>

        </div>


    );
};

export default Logged;