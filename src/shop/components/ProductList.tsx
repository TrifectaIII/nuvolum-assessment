import React from 'react';
import clsx from 'clsx';

import DetailedDisplay from './DetailedDisplay';
import { Product } from '../Shop';

import leftArrow from '../images/left-arrow.svg';
import styles from './ProductList.module.scss';

// selectable list of products by image and name
const ProductList = (props: {
    selectedIndex: number,
    selectProduct: (num: number) => void,
    products: Product[],
}) => {

    // create an react fragment for each product
    const productElements = props.products.map((product, index) => {

        // deconstruct the product object
        const {
            title,
            image,
        } = product;

        // this product selected flag
        const selected = index === props.selectedIndex;

        return (
            <div
                key={index}
            >
                {/* main bar for product */}
                <div
                    className={clsx(
                        [styles.productBar],
                        {[styles.selected]: selected},
                    )}
                    onClick={() => props.selectProduct(index)}
                >
                    {/* product image */}
                    <img
                        src={image}
                        alt={title}
                        className={styles.productImage}
                    />
                    {/* product name */}
                    <div className={styles.name}>
                        {title}
                    </div>
                    {/* menu arrow icon */}
                    <img
                        src={leftArrow}
                        alt='An arrow'
                        className={styles.arrow}
                    />
                </div>
                {/* on mobile, show the detail underneath when selected */}
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