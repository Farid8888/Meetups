import classes from './MeetupsItem.module.css'
import Card from '../UI/Card'
import {useContext} from 'react'
import {Context} from '../../store/context'
import React from 'react'
import {useHistory} from 'react-router-dom'


const MeetupsItem = (props)=>{

const ctxMeetups = useContext(Context)
const history = useHistory()

const favItem = ctxMeetups.setMeetups(props.id)
const favoritesHandler =()=>{

if(favItem){
    ctxMeetups.removeHandler(props.id)
}else{
    const favData={
              id:props.id,
              title:props.title,
              address:props.address,
              description:props.description,
              image:props.img
        }
    

    ctxMeetups.addHandler(favData)
}
history.replace("/favorites-meetup")
}



    return(
        <Card>
        <div className={classes.meetup}>
            <img src={props.img}/>
            <div className={classes.description}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            </div>
            <div className={classes.btnDiv}>
                <button className={classes.btn} onClick={favoritesHandler}>{favItem ? 'Remove Favorites' : 'To Favorites'}</button>
            </div>
        </div>
        </Card>
    )
}

export default MeetupsItem