import {createContext,useState} from 'react'
import React,{useCallback} from 'react'



export const Context = createContext({
    dammyData:[],
    totalFav:0,
    addHandler:(data)=>{},
    removeHandler:(meetupId)=>{},
    setMeetups:(meetupId)=>{}
})



const ContextProvider =(props)=>{
const [favData,setFavData]=useState([])


const addMeetupsHandler =(data)=>{
    // setFavData(prevData => [...prevData,...data])
    setFavData(prevData => prevData.concat(data))
}


const removeMeetupsHandler =(meetupId)=>{
         setFavData(prevData =>{
        return prevData.filter(item=>item.id !== meetupId )
    })
}


const setMeetupsHandler =(meetupId)=>{
        return favData.some(item=>item.id === meetupId)

}


const providerContext = {
dammyData:favData,
totalFav:favData.length,
addHandler:addMeetupsHandler,
removeHandler:removeMeetupsHandler,
setMeetups:setMeetupsHandler
}
    return(
      <Context.Provider value={providerContext}>
          {props.children}
      </Context.Provider>
    )
}

export default ContextProvider