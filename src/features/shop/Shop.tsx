import React, { useEffect } from 'react';

import {
    useAppSelector,
    useAppDispatch,
} from '../../state/hooks';
import {
    fetchProductsAsync,
    selectRequestStatus,
} from './shopSlice';
import ProductDisplay from './components/ProductDisplay';

import styles from './Shop.module.scss';

// displays the shopping interface
const Shop = () => {

    const dispatch = useAppDispatch();

    // status of product request
    const requestStatus = useAppSelector(selectRequestStatus);

    // execute request if it hasn't been made yet
    useEffect(() => {
        if (requestStatus === 'idle') dispatch(fetchProductsAsync());
    }, []);

    const loadingDisplay = <h3>Loading...</h3>;

    const rejectedDisplay = <h3>
        Failed to fetch product info. Please reload the page to try again.
    </h3>;

    return (
        <div className={styles.root}>
            {requestStatus === 'loading' ? loadingDisplay : <></>}
            {requestStatus === 'rejected' ? rejectedDisplay : <></>}
            {requestStatus === 'fulfilled' ? <ProductDisplay /> : <></>}
        </div>
    );
}

export default Shop;