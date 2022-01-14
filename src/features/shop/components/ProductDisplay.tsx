import React from 'react';

import ProductList from './ProductList';
import DetailedDisplay from './DetailedDisplay';

import styles from './ProductDisplay.module.scss';

const ProductDisplay = () => {

    return (
        <div className={styles.root}>
            <ProductList />
            <DetailedDisplay />
        </div>
    );
}

export default ProductDisplay;