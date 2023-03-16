
import { Link } from "react-router-dom"
import clsx from "clsx"
import styles from "./ProductList.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartIcon } from "@fortawesome/free-regular-svg-icons"

function ProductList(props){
    return (
        <div className={clsx(styles.productList)}>
            {
                (!props.TOPPINGS)?
                    <div className={clsx(styles.productName)}>
                        <h2>
                            <b></b>
                            <span> {(props.title)} </span>
                            <b></b>
                        </h2>
                    </div>
                    :
                    ""
            }
            
            <div className="container">
                <ul className="row">
                    {
                        (props.productList).map((product)=>{
                            return (
                                <li key={product.id} className={clsx('col-3', styles.productItem)}>
                                    <Link to = "/productDetail">
                                        <img src={product.img} alt= "RAU MÁ MIX"/>
                                    </Link>
                                    <div className={clsx(styles.content)}>
                                    <Link to="/productDetail"><h4>{product.name}</h4></Link>
                                        <p className={clsx(styles.cost)}>{product.cost}đ</p>
                                        <p>rau má mix tự nhiên rau má mix tự nhiên rau má mix tự nhiên</p>
                                    </div>
                                    <div className={clsx(styles.wishlist)}>
                                        <button><FontAwesomeIcon icon={heartIcon} /></button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductList