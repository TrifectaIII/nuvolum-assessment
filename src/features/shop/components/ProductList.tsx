import React from 'react';
import clsx from 'clsx';

import {
    useAppDispatch,
    useAppSelector,
} from '../../../state/hooks';
import {
    selectChosen,
    selectProducts,
    chooseProduct,
} from '../shopSlice';

import leftArrow from '../../../images/left-arrow.svg';
import styles from './ProductList.module.scss';
import DetailedDisplay from './DetailedDisplay';

const ProductList = () => {

    const dispatch = useAppDispatch();

    // current list of products and currently selected index
    const products = useAppSelector(selectProducts);
    const chosen = useAppSelector(selectChosen);

    // create an react fragment for each product
    const productElements = products.map((product, index) => {

        // deconstruct the product object
        const {
            title,
            image,
        } = product;

        const selected = chosen === index;

        return (
            <div
                key={index}
            >
                <div
                    className={clsx(
                        [styles.productBar],
                        {[styles.selected]: selected},
                    )}
                    onClick={() => dispatch(chooseProduct(index))}
                >
                    <img
                        src={image}
                        alt={title}
                        className={styles.productImage}
                    />
                    <div className={styles.name}>
                        {title}
                    </div>
                    <img
                        src={leftArrow}
                        alt='An arrow'
                        className={styles.arrow}
                    />
                </div>
                <DetailedDisplay
                    product={product}
                    type='under'
                    hidden={!selected}
                />
            </div>
        )

    });

    return (
        <div className={styles.root}>
            {productElements}
        </div>
    );
}

export default ProductList;