import Logo from "./Logo"
import styles from './PageNav.module.css'
import { Link, NavLink } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { NavDropdown } from "react-bootstrap"
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
                    <NavLink to="/catalogue">Products</NavLink>
                </li>
                {userInfo? (
                    <NavDropdown title={userInfo.name} id='username'>
                        <Link to='/profile'>Profile</Link>
                        <NavDropdown.Item  style={{color: "red", padding: "2rem" }} onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
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
