import MeetupsList from "../components/Meetups/MeetupsList"
import {Context} from '../store/context'
import {useContext} from 'react'




const Favorites = (props)=>{

const ctxMeetups = useContext(Context)

const favControl = ctxMeetups.totalFav

let content

if(favControl === 0){
    content = <p>Add Fav</p>
}else{
    content = <MeetupsList data={ctxMeetups.dammyData}/>
}

return (
    <div>
        {content}
   </div>
)

}

export default Favorites