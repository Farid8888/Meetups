import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.css'
import { Context } from '../store/context'
import {useContext} from 'react'

const Navigation = (props)=>{
const ctxMeetups = useContext(Context)
    return(
         <header className={classes['nav-header']}>
             <h1>React Meetups</h1>
             <nav>
             <ul>
                 <li><NavLink activeStyle={{color:'blue'}} to="/" exact>All Meetups</NavLink></li>
                 <li><NavLink activeStyle={{color:'blue'}} to="/new-meetup">Add New Meetup</NavLink></li>
                 <li><NavLink activeStyle={{color:'blue'}} to="/favorites-meetup">My Favorites<span className={classes.totalFav}>{ctxMeetups.totalFav}</span></NavLink></li>
             </ul>
             </nav>
         </header>
    )
}

export default Navigation