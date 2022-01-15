import React from 'react';
import clsx from 'clsx';

import {
    useAppSelector,
} from '../../../state/hooks';
import {
    selectChosen,
    selectProducts, 
} from '../shopSlice';

import blackStar from '../../../images/black-star.svg';
import goldStar from '../../../images/gold-star.svg';
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

        const rateRounded = Math.round(rating.rate);
        const stars = [0,0,0,0,0].map((value, index) => {

            const filled = index < rateRounded;

            return <img
                key={index}
                className={styles.star}
                src={filled ? goldStar : blackStar}
                alt={filled ? 'A gold star' : 'A black star'}
            />

        });

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
                <p>{stars} ({rating.count})</p>
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