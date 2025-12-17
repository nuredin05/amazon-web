import React, { useContext, useState } from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurencyFormat/CurencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../dataProvider/dataProvider'
import { Type } from '../../utils/action.type'
const productCard = ({ product, flex, renderDesc, renderAdd }) => {
    const { image, title, id, rating, price, description } = product;
    const [state, dispatch] = useContext(DataContext)
    const addTocart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: {
                image, title, id, rating, price, description
            }
        })
    }


    return (
        <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
                <div className={classes.rating}>
                    {/* rating */}
                    <Rating value={rating?.rate || 0} precision={.1} />
                    {/* count */}
                    <small>{rating?.count || 0}</small>
                </div>
                <div>
                    {/* price */}

                    {/* {products?.price} */}
                    <CurrencyFormat amount={price} />
                </div>
                {
                    renderAdd && <button className={classes.button} onClick={addTocart}>
                        add to cart
                    </button>
                }

            </div>
        </div>
    )
}

export default productCard