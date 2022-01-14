import React from 'react';
import Shop from './features/shop/Shop';
import styles from './App.module.scss';
import 'normalize.css';

function App() {
    return (
        <div className={styles.app}>
            <h1>Shop</h1>
            <Shop />
        </div>
    );
}

export default App;
