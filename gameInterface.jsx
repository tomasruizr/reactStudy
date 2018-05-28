const Stars = (props)=>{
    return (
        <div className="col-5">
            {[...Array(props.numberOfStars).keys()].map(index => {
                return <i key={index} className="fa fa-star"></i>

            }
            )}
        </div>
    )
}
const Button = (props)=>{
    let button;
    switch(props.answerIsCorrect){
        case true:
            button = 
            <button className="btn btn-success" disabled={props.selectedNumbers.length === 0}>
                =
            </button>
            break;
        case false:
            button =
            <button className="btn btn-danger" disabled={props.selectedNumbers.length === 0}>
                =
            </button>
            break;
        default:
            button = 
            <button className="btn" disabled={props.selectedNumbers.length === 0}>
                =
            </button>
    }
    return (
        <div className="col-2 ">
            
        </div>
    )
}
const Answer = (props)=>{
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) =>
                <span 
                    key={i}
                    onClick={() => {
                        props.unselectNumber(number)
                    }}>
                    {number}
                </span>
            )}
        </div>
    )
}
const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.selectedNumbers.includes(number))
            return 'selected'
    }
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => 
                    <span 
                        key={i} className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                        
                    </span>
                )}
            </div>
        </div>
    )
}
Numbers.list = [...Array(10).keys()].splice(1, 9);

class Game extends React.Component {
    state = {
        selectedNumbers:[],
        numberOfStars: 1 + Math.floor(Math.random()*9),
        answerIsCorrect: null
    }
    selectNumber = (clickedNumber) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers.includes(clickedNumber) ? prevState.selectedNumbers : prevState.selectedNumbers.concat(clickedNumber)
        }))  
    }
    unselectNumber = (clickedNumber) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers.filter((number) => {
                return number != clickedNumber
            })
        }))  
    }
    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n,0 )
        }))
    }
    render (){
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Stars numberOfStars={this.state.numberOfStars}/>
                    <Button 
                        selectedNumbers={this.state.selectedNumbers}
                        checkAnswer={this.checkAnswer}
                        answerIsCorrect={this.state.answerIsCorrect}
                    />
                    <Answer unselectNumber={this.unselectNumber} selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <br/>
                <Numbers selectNumber={this.selectNumber} selectedNumbers={this.state.selectedNumbers}/>
            </div>
        )
    }
}
class App extends React.Component {
    render (){
        return (
            <div>
                <Game/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))