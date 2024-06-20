const name = "greg";

const displayMessage = () => {
    return "Welcome to basic react training"
}

function Hello () {
    return <h1>Hello {name}! {displayMessage()}</h1>
}

//es6
// const Hello = () => <h1>Hello There!</h1>

export default Hello;