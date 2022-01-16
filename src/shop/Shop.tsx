import React, { useEffect, useState } from 'react';

import { API_ENDPOINT } from '../constants';
import ProductList from './components/ProductList';
import DetailedDisplay from './components/DetailedDisplay';

import styles from './Shop.module.scss';

type RequestStatus = 'idle' | 'loading' | 'fulfilled' | 'rejected';

// type of objects from API
export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

// displays the shopping interface
const Shop = () => {

    // state for shop component
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>([]);

    // extract selected product from array (may be undefined)
    const selectedProduct = products[selectedIndex];

    // function to allow selection/deselection
    const selectProduct = (index: number) => {
        if (selectedIndex === index) setSelectedIndex(-1);
        else setSelectedIndex(index);
    }

    // function to fetch data
    const fetchData = async () => {
        setRequestStatus('loading');
        try {
            setProducts(await (await fetch(API_ENDPOINT)).json() as Product[]);
            setRequestStatus('fulfilled');
        }
        catch {
            setRequestStatus('rejected');
        }
    };

    // fetch the data on first render
    useEffect(() => {fetchData()}, []);

    // What to display when request is loading or has failed
    const loadingDisplay = <h3>Loading...</h3>;
    const rejectedDisplay = <h3>
        Failed to fetch product info. Please reload the page to try again.
    </h3>;

    return (
        <div className={styles.root}>
            {requestStatus === 'loading' ? loadingDisplay : <></>}
            {requestStatus === 'rejected' ? rejectedDisplay : <></>}
            {requestStatus === 'fulfilled' 
                ? <div className={styles.root}>
                    {/* always display list of products */}
                    <ProductList
                        selectedIndex={selectedIndex}
                        selectProduct={selectProduct}
                        products={products}
                    />
                    {
                        // only display detail when something is selected
                        selectedProduct
                            ? <DetailedDisplay
                                product={selectedProduct}
                                type='main'
                            /> 
                            : <></>
                    }
                
                </div>
                : <></>
            }
        </div>
    );
}

export default Shop;