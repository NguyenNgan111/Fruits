import {clsx} from "clsx"
import styles from './index.module.scss'

import logo from "./img/logo.png"
function Logo (){
    return (
        <div id={clsx(styles.logo)}>
            <a href="#"><img src={logo} alt="logo" /></a>
        </div>
    )
}
export default Logo