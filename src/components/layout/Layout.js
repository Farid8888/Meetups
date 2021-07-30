import Navigation from '../../Navigation/Navigation'
import classes from './Layout.module.css' 

const layout = (props)=>{
    return(
      <div>
          <Navigation/>
          <main className={classes.layout}>{props.children}</main>
      </div>
    )
}

export default layout