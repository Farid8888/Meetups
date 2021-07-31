import MeetupsForm from "../components/Meetups/MeetupsForm"
import {useHistory} from 'react-router-dom'





const NewMeetups = (props)=>{
const history = useHistory()
const postData = (meetups)=>{
fetch('https://meetups-c4e55-default-rtdb.firebaseio.com/meetups.json',{
    method:'POST',
    body:JSON.stringify(meetups),
    headers:{
        'Content-type':'application/json'
    }
}).then(()=>{
history.replace('/')
}).catch(error=>error.message)
}

    return(
        <div>
           <h2 style={{fontSize: '3rem'}}>Add New Meetup</h2>
           <MeetupsForm postFunction={postData}/>
        </div>
    )
}

export default NewMeetups


