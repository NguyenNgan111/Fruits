import clsx from "clsx"
import styles from "./ImageList.module.scss"
function ImageList(props){
    return (
        <div className={clsx(styles.imageList)}>
            <div className={clsx(styles.title)}>
                <h2>
                    <span>Thư viện ảnh</span>
                    <b></b>
                    <b></b>
                </h2>
            </div>
            <div className={clsx(styles.listImgs)}>
                <ul>
                    {
                        (props.imageList).map((item,index)=>{
                            return (
                                <li className={clsx('col-3', styles.imgCustomer)} key={index}>
                                    <img src={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default ImageList