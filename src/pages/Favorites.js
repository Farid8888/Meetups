import MeetupsList from "../components/Meetups/MeetupsList"
import {Context} from '../store/context'
import {useContext} from 'react'




const Favorites = (props)=>{

const ctxMeetups = useContext(Context)

const favControl = ctxMeetups.totalFav

let content

if(favControl === 0){
    content = <p>You got no favorites yet. Start adding some?</p>
}else{
    content = <MeetupsList data={ctxMeetups.dammyData}/>
}

return (
    <div>
        <h2 style={{fontSize: '3rem'}}>My Favorites</h2>
        {content}
   </div>
)

}

export default Favorites