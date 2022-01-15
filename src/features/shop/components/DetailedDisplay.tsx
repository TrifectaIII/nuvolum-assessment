import React from 'react';
import clsx from 'clsx';

import {
    Product,
} from '../shopAPI';

import blackStar from '../../../images/black-star.svg';
import goldStar from '../../../images/gold-star.svg';
import styles from './DetailedDisplay.module.scss';


// a detailed display of a single product
const DetailedDisplay = (props: {
    product: Product,
    type: 'main' | 'under',
    hidden?: boolean,
}) => {

    // deconstruct the product object
    const {
        price,
        description,
        rating
    } = props.product;

    // create star rating from SVGs
    const stars = new Array(5).fill(0).map((value, index) => {

        const filled = index < rating.rate;

        return <img
            key={index}
            className={styles.star}
            src={filled ? goldStar : blackStar}
            alt={filled ? 'A gold star' : 'A black star'}
        />

    });

    const typeClass = props.type === 'main' ? styles.main : styles.under;

    return (
        <div
            className={clsx(
                typeClass,
                [styles.root],
                // hide if not the selected element
                {[styles.hidden]: props.hidden},
            )}
        >
            <h3>${price}</h3>
            <p>{description}</p>
            <p>{stars} ({rating.count})</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default DetailedDisplay;