const Tweet = ({ username, name, date, message }) => {
    return (
        <div>
            <h2>{username}</h2>
            <p>{name}</p>
            <p>{date}</p>
            <p>{message}</p>
        </div>
    )
}