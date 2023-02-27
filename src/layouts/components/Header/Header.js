import classNames from "classnames/bind";
import styles from './Header.module.scss';

import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Header ({ data }) {
    
    // const handleClick = () => {
    //     window.location.href = 'http://localhost:3000/question'
    // }

    return (
        <div className={cx('wrapper')}>
            <h1>HEADER</h1>

            <button> 
                <Link to={'http://localhost:3000/question'}>Đi </Link>
            </button>
        </div>
    )
}

export default Header;
