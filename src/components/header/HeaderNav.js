import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import styles from './HeaderNav.module.scss'

function HeaderNav (props){
    return (
        <div>
                {
                    (props.BTNPHONE) ? 
                    <div className={clsx(styles.btnGreen)}>
                        {
                            (props.data).map((item, index)=>{
                                return (
                                    <button key={index}><Link to="/">HOTLINE: {item}</Link></button>
                                )
                            })
                        }
                    </div>
                        :
                        <ul>
                            {
                                (props.data).map((item, index)=>{
                                    return (
                                        <li key={index}>
                                            <Link to="/">{item}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }
        </div>
    )
}
export default HeaderNav