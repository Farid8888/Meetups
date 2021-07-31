import MeetupsItem from './MeetupsItem'








const MeetupsList = (props)=>{
    return(
        <section>
            {props.data.map(item=>{
             return <MeetupsItem 
             key={item.id}
              id={item.id}
              title={item.title}
              address={item.address}
              description={item.description}
              img={item.image}/>
            })}
        </section>

    )
}



export default MeetupsList