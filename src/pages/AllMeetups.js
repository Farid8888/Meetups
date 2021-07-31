import MeetupsList from "../components/Meetups/MeetupsList"
import {Context} from '../store/context'
import React, {useContext,useEffect,useState} from 'react'



// const DUMMY_DATA =[
//     {
//         id:'first',
//         description:'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//         title:'This is a first meetup',
//         address:'Meetupstreet 5, 12345 Meetup City',
//         img:"https://klike.net/uploads/posts/2020-01/1578212659_1.jpeg"
//     },
//     {
//         id:'second',
//         description:'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//         title:'This is a second meetup',
//         address:'Meetupstreet 5, 12345 Meetup City',
//         img:"https://klike.net/uploads/posts/2020-01/1578212645_2.jpg"
//     }
// ] 






const AllMeetups = (props)=>{
    const [dataState,setDataState] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://meetups-c4e55-default-rtdb.firebaseio.com/meetups.json').
        then(response=>response.json()).then(data=>{
            const responseData = []
            for(let key in data){
                const newObj = {...data[key],id:key}
                responseData.push(newObj)
            }
            setIsLoading(false)
            setDataState(responseData)
           
        })
        },[])

     if(isLoading){
         return <p>Loading...</p>
     }   

    return (
        <div>
             <h2 style={{fontSize: '3rem'}}>All Meetups</h2>
             <MeetupsList data={dataState}/>
        </div>
    )     
        
}

export default AllMeetups