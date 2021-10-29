import './styles.css'

function Developer({name, age, country}){
    return(
        <div className='developersCard'>
            <p>{name}</p>
            <p>{age}</p>
            <p>{country}</p>
        </div>
    )
}

export default Developer