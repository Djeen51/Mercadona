import Logo from "./Logo"
import styles from './PageNav.module.css'
import { Link, NavLink } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'

function PageNav() {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin;

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <nav className={styles.nav}>
            <Logo />
            <ul>
                <li>
                    <NavLink to="/catalogue">Shopping</NavLink>
                </li>
                {userInfo ? (
                    <li className={styles.dropdown}>    
                         
                         {userInfo.isAdmin && (
                        <>
                        <Link to='/admin/userList'>userList</Link>
                        <Link to='/admin/productList' style={{color: "blue" }}> EDIT Products</Link>
                        </>
     
                        )    
                        
                        }
                         <Link  to='/profile' className={styles.dropbtn}>{userInfo.name}</Link>
                         <Link  to='/' style={{color: "red" }} onClick={logoutHandler}>Logout</Link>
                    </li>
                ): (

                <li>
                <NavLink to="/Login">Login</NavLink>
                 </li>
                )
                }               
            </ul>
        </nav>
    )
}

export default PageNav
