function Card({cardType, amount}){

    return(
        <div>
            <p>{cardType}</p>
            <p>{amount}</p>
        </div>
    )
}

export default Card