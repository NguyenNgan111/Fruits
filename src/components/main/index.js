import clsx from "clsx"
import styles from "./index.module.scss"
import SimpleSlider from "./Slider.js"
import ProductList from "./ProductList.js"
import Topping from "./Topping.js"
import Combo from "./Combo.js"
import ImageList from "./ImageList.js"
import MapList from "./MapList.js"

const IMAGESLIDERS = ['https://phuclong.com.vn/uploads/banner/693431e1a25871-banner_1920576.png', 'https://phuclong.com.vn/uploads/banner/693431e1a25871-banner_1920576.png']
const productList = [
    {
        "id": "1",
        "img": "https://phuclong.com.vn/uploads/dish/dbeebaca2cf5ba-trvaitilcphclong.png",
        "cost": "30000",
        "name": "Rau má mix sầu riêng"
    },
    {
        "id": "2",
        "img": "https://phuclong.com.vn/uploads/dish/dbeebaca2cf5ba-trvaitilcphclong.png",
        "cost": "40000",
        "name": "Rau má mix nước dừa"
    },
    {
        "id": "3",
        "img": "https://phuclong.com.vn/uploads/dish/dbeebaca2cf5ba-trvaitilcphclong.png",
        "cost": "10000",
        "name": "Rau má mix đậu đỏ"
    },
    {
        "id": "4",
        "img": "https://phuclong.com.vn/uploads/dish/dbeebaca2cf5ba-trvaitilcphclong.png",
        "cost": "10000",
        "name": "Rau má mix đậu đỏ"
    }
]
const toppings = [
    {
        "id": "1",
        "img": "https://phuclong.com.vn/uploads/dish/9285f2a1e555ac-cphrobustaculiphclong500g.png",
        "cost": "30000",
        "name": "Rau má mix sầu riêng"
    },
    {
        "id": "2",
        "img": "https://phuclong.com.vn/uploads/dish/9285f2a1e555ac-cphrobustaculiphclong500g.png",
        "cost": "40000",
        "name": "Rau má mix nước dừa"
    },
    {
        "id": "3",
        "img": "https://phuclong.com.vn/uploads/dish/9285f2a1e555ac-cphrobustaculiphclong500g.png",
        "cost": "10000",
        "name": "Rau má mix đậu đỏ"
    },
    {
        "id": "4",
        "img": "https://phuclong.com.vn/uploads/dish/9285f2a1e555ac-cphrobustaculiphclong500g.png",
        "cost": "10000",
        "name": "Rau má mix đậu đỏ"
    }
]
const combo = [
    {
        "id": "1",
        "img": "https://phuclong.com.vn/uploads/dish/3352e3388f0644-oolong96g_1611624557.png",
        "cost": "30000",
        "name": "Rau má mix sầu riêng"
    },
    {
        "id": "2",
        "img": "https://phuclong.com.vn/uploads/dish/3352e3388f0644-oolong96g_1611624557.png",
        "cost": "40000",
        "name": "Rau má mix nước dừa"
    },
    {
        "id": "3",
        "img": "https://phuclong.com.vn/uploads/dish/3352e3388f0644-oolong96g_1611624557.png",
        "cost": "10000",
        "name": "Rau má mix đậu đỏ"
    },
    {
        "id": "4",
        "img": "https://phuclong.com.vn/uploads/dish/3352e3388f0644-oolong96g_1611624557.png",
        "cost": "10000",
        "name": "Rau má mix đậu đỏ"
    }
]
const imageList = ['https://phuclong.com.vn/uploads/gallery/15fd9310aa8148-33594531_1702955816440717_5388297628318433280_o.jpg','https://phuclong.com.vn/uploads/gallery/15fd9310aa8148-33594531_1702955816440717_5388297628318433280_o.jpg','https://phuclong.com.vn/uploads/gallery/15fd9310aa8148-33594531_1702955816440717_5388297628318433280_o.jpg','https://phuclong.com.vn/uploads/gallery/15fd9310aa8148-33594531_1702955816440717_5388297628318433280_o.jpg','https://phuclong.com.vn/uploads/gallery/15fd9310aa8148-33594531_1702955816440717_5388297628318433280_o.jpg']
function Main(){
    return (
        <div id = {clsx(styles.body)}>
            <div id = {clsx(styles.slider)}>
                <SimpleSlider imgs = {IMAGESLIDERS}/>
            </div>
            <div>
                <div id = {clsx(styles.productList)}>
                    <ProductList productList = {productList} title = "MENU - RAU MÁ MIX" />
                </div>
                <div id = {clsx(styles.toppings)}>
                    <Topping toppings = {toppings} TOPPINGS = {true}/>
                </div>
                <div id = {clsx(styles.combo)}>
                    <Combo combo = {combo} title = "COMBO - RAU MÁ MIX"/>
                </div>
                <div id={clsx(styles.imageList)}>
                    <ImageList imageList = {imageList} />
                </div>
                <div id={clsx(styles.mapList)}>
                    <MapList />
                </div>
            </div>
        </div>
    )
}
export default Main