import classes from './MeetupsForm.module.css'
import Card from '../UI/Card'

const meetupsForm = (props)=>{

    return(        
        <Card>
        <form className={classes.formControl}>
            <div className={classes.titleForm}>
            <label htmlFor='title'>Meetup Title</label>
            <input id='title' required type="text"/>
            </div>
            <div className={classes.titleForm}>
            <label htmlFor='image'>Meetup Image</label>
            <input id='image' required type="text"/>
            </div>
            <div className={classes.titleForm}>
            <label htmlFor='address'>Address</label>
            <input id='address' required type="text"/>
            </div>
            <div className={classes.titleForm}>
            <label htmlFor='description'>Description</label>
            <textarea id='description' required rows='7' type="text"/>
            </div>
            <div className={classes.actions}>
                <button className={classes.btn}>Add Meetup</button>
            </div>
        </form>
        </Card>
    )
}

export default meetupsForm