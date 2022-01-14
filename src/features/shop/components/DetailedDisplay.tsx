import React from 'react';

import {
    useAppSelector,
} from '../../../state/hooks';
import {
    selectChosen, 
    selectProducts, 
} from '../shopSlice';

import styles from './DetailedDisplay.module.scss';

const DetailedDisplay = () => {

    // current list of products and currently selected index
    const products = useAppSelector(selectProducts);
    const chosen = useAppSelector(selectChosen);

    // deconstruct the selected product object
    const {
        price,
        description,
        rating
    } = products[chosen];

    return (
        <div className={styles.root}>
            <h3>${price}</h3>
            <p>{description}</p>
            <p>{rating.rate}/5 ({rating.count})</p>
        </div>
    );
}

export default DetailedDisplay;