import clsx from "clsx";
import styles from "./ProductDetail.module.scss"
const productsList = [
    {
        id: 1,
        img: "https://phuclong.com.vn/uploads/dish/dbeebaca2cf5ba-trvaitilcphclong.png",
        name: "Trà đào",
        description: "Trà đào 100% tự nhiên thơm ngon ...",
        cost: "100000"
    }
]
function ProductDetail  ({props}){
    return (
        <div className={clsx(styles.productDetail)}>
            <div className={clsx('container')}>
                <div className={clsx('row')}>
                    <div className={clsx('col-5', styles.thumnails)}>
                        <img src={productsList[0].img}/>
                    </div>
                    <div className={clsx('col-7', styles.content)}>
                        <h2 className={clsx(styles.name)}>{productsList[0].name}</h2>
                        <p className={clsx(styles.cost)}>{productsList[0].cost}</p>
                        <div className={clsx(styles.formQty)}>
                            <input className={clsx(styles.minus)} type="button" value="-" />
                            <input className={clsx(styles.inputQty)} max={10} min={1} name="" type="number" value={1} />
                            <input className={clsx(styles.plus)} type="button" value="+" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail