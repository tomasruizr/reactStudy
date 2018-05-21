class Button extends React.Component {
    
    handleClick = ()=>{
        this.setState((prevState)=> ({
            counter: this.state.counter + 1
        }))
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        )
    }
}

const Result = (props)=> {
    return (
        <div>...</div>
    )
}

class App extends React.Component {
    state = {counter:0}
    render(){
        return (
            <div>
                <Button/>
                <R  esult/>
            </div>
        )
    }
}

ReactDOM.render(
    <Button/>,
    document.getElementById('root')
);