import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.css'

const navigation = (props)=>{
    return(
         <header className={classes['nav-header']}>
             <h1>React Meetups</h1>
             <nav>
             <ul>
                 <li><NavLink activeStyle={{color:'blue'}} to="/" exact>All Meetups</NavLink></li>
                 <li><NavLink activeStyle={{color:'blue'}} to="/new-meetup">Add New Meetup</NavLink></li>
                 <li><NavLink activeStyle={{color:'blue'}} to="/favorites-meetup">My Favorites</NavLink></li>
             </ul>
             </nav>
         </header>
    )
}

export default navigation