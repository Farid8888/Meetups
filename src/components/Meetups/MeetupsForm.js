import classes from './MeetupsForm.module.css'
import Card from '../UI/Card'
import {useRef} from 'react'

const MeetupsForm = (props)=>{
const titleRef = useRef()
const imageRef = useRef()
const addressRef =useRef()
const descriptionRef = useRef()


const onSubmitHandler = (event)=>{
event.preventDefault()

const enteredTitle = titleRef.current.value
const enteredImage = imageRef.current.value
const enteredAddressRef = addressRef.current.value
const enteredDescriptionRef = descriptionRef.current.value

const meetups ={
    title:enteredTitle,
    image:enteredImage,
    address:enteredAddressRef,
    description:enteredDescriptionRef
}

props.postFunction(meetups)
}

    return(        
        <Card>
        <form className={classes.formControl} onSubmit={onSubmitHandler}>
            <div className={classes.titleForm}>
            <label htmlFor='title'>Meetup Title</label>
            <input id='title' required type="text" ref={titleRef}/>
            </div>
            <div className={classes.titleForm}>
            <label htmlFor='image' >Meetup Image</label>
            <input id='image' required type="text" ref={imageRef}/>
            </div>
            <div className={classes.titleForm}>
            <label htmlFor='address' >Address</label>
            <input id='address' required type="text" ref={addressRef}/>
            </div>
            <div className={classes.titleForm}>
            <label htmlFor='description' >Description</label>
            <textarea id='description' required rows='7' type="text" ref={descriptionRef}/>
            </div>
            <div className={classes.actions}>
                <button className={classes.btn}>Add Meetup</button>
            </div>
        </form>
        </Card>
    )
}

export default MeetupsForm