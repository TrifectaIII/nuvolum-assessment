import React from 'react';
import Shop from './features/shop/Shop';
import styles from './App.module.scss';
import 'normalize.css';

// Main entrypoint
// just some text and the shop component
function App() {
    return (
        <div className={styles.app}>
            <h1>Shop</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse ac urna vel metus hendrerit aliquam. 
                Proin hendrerit nisi et maximus dapibus. 
                Cras sed ex nec odio lacinia ornare quis non risus. 
                Ut blandit mi ipsum, pharetra egestas urna aliquam eget. 
                Integer semper sapien eu turpis feugiat semper. 
                Suspendisse potenti. Donec nec blandit nisi. 
                Nunc a fermentum tellus.
            </p>
            <Shop />
        </div>
    );
}

export default App;
