import React from 'react';

import ProductList from './ProductList';
import DetailedDisplay from './DetailedDisplay';

import styles from './ProductDisplay.module.scss';
import { useAppSelector } from '../../../state/hooks';
import { selectChosen, selectProducts } from '../shopSlice';

const ProductDisplay = () => {

    const products = useAppSelector(selectProducts);
    const chosen = useAppSelector(selectChosen);

    const selectedProduct = products[chosen];

    return (
        <div className={styles.root}>
            <ProductList />
            {
                selectedProduct
                    ? <DetailedDisplay
                        product={selectedProduct}
                        type='main'
                    /> 
                    : <></>
            }
            
        </div>
    );
}

export default ProductDisplay;