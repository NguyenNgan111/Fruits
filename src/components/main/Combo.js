import clsx from "clsx"
import styles from "./Combo.module.scss"
import ProductList from "./ProductList.js"
function Combo(props){
    return (
        <div className={clsx(styles.combo)}>
            <ProductList productList = {(props.combo)} title = {(props.title)} />
        </div>
    )
}
export default Combo