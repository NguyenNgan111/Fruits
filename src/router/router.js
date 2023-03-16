
import Home from '../components/main'
import ProductDetail from '../components/productDetails/ProductDetail'
const publicRoutes = [
 {path: '/', component : Home},
 {path: '/productDetail', component : ProductDetail},
]
const rivateRoutes = [

]
export {publicRoutes, rivateRoutes}