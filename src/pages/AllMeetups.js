import MeetupsList from "../components/Meetups/MeetupsList"
import {Context} from '../store/context'
import React, {useContext,useEffect} from 'react'






const DUMMY_DATA =[
    {
        id:'first',
        description:'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        title:'This is a first meetup',
        address:'Meetupstreet 5, 12345 Meetup City',
        img:"https://klike.net/uploads/posts/2020-01/1578212659_1.jpeg"
    },
    {
        id:'second',
        description:'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        title:'This is a second meetup',
        address:'Meetupstreet 5, 12345 Meetup City',
        img:"https://klike.net/uploads/posts/2020-01/1578212645_2.jpg"
    }
] 




const AllMeetups = (props)=>{
  
    return <MeetupsList data={DUMMY_DATA}/>
            
        
}

export default AllMeetups