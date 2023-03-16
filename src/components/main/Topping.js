import clsx from "clsx"
import styles from "./Topping.module.scss"
import ProductList from "./ProductList.js"
function Topping(props){
    return (
        <div className={clsx(styles.toppings)}>
            <div className={clsx(styles.toppingsImg)}>
                <img src="https://phuclong.com.vn/uploads/large/images/f3a773106ca137-logocompany.jpg" alt="TOPPINGS" />
            </div>
            <ProductList productList = {(props.toppings)} TOPPINGS = {(props.TOPPINGS)} />
        </div>
    )
}
export default Topping