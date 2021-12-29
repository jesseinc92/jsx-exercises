const App = () => {
    return (
        <div>
            <Tweet username="jesseboi92" name="Jesse" date="12/13/14" message="My first tweet" />
            <Tweet username="ronnygurl93" name="Ronny" date="11/12/13" message="I was here first" />
            <Tweet username="phrynefish28" name="Phryne" date="10/11/12" message="Boys, boys... I was here first" />
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));