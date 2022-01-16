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
            title={`${rating.rate}/5 Rating`}
        />

    });

    return (
        <div
            className={clsx(
                props.type === 'main' ? styles.main : styles.under,
                [styles.root],
                // hide if not the selected element
                {[styles.hidden]: props.hidden},
            )}
        >
            <div
                className={styles.inner}   
            >
                <h3><code>${price}</code></h3>
                <p>{description}</p>
                <div
                    className={styles.rating}
                >
                    {stars}
                    (<a
                        href='/'
                        title='See reviews'
                    >
                        {rating.count}
                    </a>)
                </div>
                <button
                    className={styles.cartButton}
                >
                    <h3>Add to Cart</h3>
                </button>
            </div>
        </div>
    );
}

export default DetailedDisplay;