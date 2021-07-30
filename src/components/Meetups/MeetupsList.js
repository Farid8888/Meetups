import MeetupsItem from './MeetupsItem'
import classes from './MeetupsList.module.css'
import {Context} from '../../store/context'
import {useContext} from 'react'







const MeetupsList = (props)=>{
    return(
        <section className={classes.meetupsList}>
            <h2>All Meetups</h2>
            {props.data.map(item=>{
             return <MeetupsItem 
             key={item.id}
              id={item.id}
              title={item.title}
              address={item.address}
              description={item.description}
              img={item.img}/>
            })}
        </section>

    )
}



export default MeetupsList