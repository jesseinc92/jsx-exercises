const Person = ({ name, age, hobbies }) => {
    return (
        <div>
            { name.length > 8 ? <p>{name.substring(0, 6)}...</p> : <p>{name}</p>}
            <p>Learn some information about this person</p>
            { age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}

            <h3>hobbies</h3>
            <ul>
                { hobbies.map(hobby => <li>{hobby}</li>) }
            </ul>
        </div>
    );
};