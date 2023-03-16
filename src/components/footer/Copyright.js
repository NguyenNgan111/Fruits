import clsx from "clsx"
import styles from "./Copyright.module.scss"
function Copyright (){
    return (
        <div className={clsx(styles.copyright)}>
            <p>© Rau má mix</p>
        </div>
    )
}
export default Copyright