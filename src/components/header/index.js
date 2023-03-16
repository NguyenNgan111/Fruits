import { clsx } from 'clsx';

import styles from './index.module.scss'
import HeaderNav from "./HeaderNav.js"
import Logo from "./Logo.js"
const NAVLIST = ["Trang chủ", "Menu", "Blog", "Thư viện ảnh", "Cửa hàng", "Tuyển dụng"]
const HOTLINE = ["1900633934"]
function Header(){
    return (
        <div id = {clsx(styles.header)}>
            <HeaderNav data = {NAVLIST} />
            <Logo />
            <HeaderNav data = {HOTLINE} BTNPHONE />
        </div>
    )
}
export default Header