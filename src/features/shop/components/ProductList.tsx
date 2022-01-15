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

        return (
            <div
                key={index}
                className={clsx({
                    [styles.productElement]: true,
                    [styles.selected]: index === chosen,
                })}
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
        )

    });

    return (
        <div className={styles.root}>
            {productElements}
        </div>
    );
}

export default ProductList;