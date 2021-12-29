const App = () => {
    return (
        <div>
            <Person name="Jesse" age={21} hobbies={['reading', 'writing']} />
            <Person name="Elizabeth" age={16} hobbies={['snooping', 'fighting', 'eating']} />
            <Person name="Ronny" age={18} hobbies={[]} />
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));