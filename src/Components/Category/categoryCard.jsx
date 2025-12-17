import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom';

const categoryCard = ({ data }) => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>
            {data?.title}
          </h2>
          <img src={data?.imgLink} alt="" />
          <p>shop now</p>
        </span>
      </Link>
    </div>
  )
}

export default categoryCard;