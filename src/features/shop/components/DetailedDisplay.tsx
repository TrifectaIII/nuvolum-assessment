import React from 'react';
import clsx from 'clsx';

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

    // create a react fragment for each product
    const detailElements = products.map((product, index) => {

        // deconstruct the product object
        const {
            price,
            description,
            rating
        } = product;

        return (
            <div
                key={index}
                className={clsx({
                    [styles.detailElement]: true,
                    // hide if not the selected element
                    [styles.hidden]: index !== chosen,
                })}
            >
                <h3>${price}</h3>
                <p>{description}</p>
                <p>{rating.rate}/5 ({rating.count})</p>
                <button>Add to Cart</button>
            </div>
        );

    });

    return (
        <div className={styles.root}>
            {detailElements}
        </div>
    );
}

export default DetailedDisplay;