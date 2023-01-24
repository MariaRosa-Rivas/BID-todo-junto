import { Component } from "react"; 

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorAge:45
        };
    }
    render() {
        const suma = () => {
            this.setState({
                valorAge: valorAge + 1,

            })
        }
        const { firstName, lastName , age, children} = this.props;
        const {valorAge} = this.state;

        return (
            <>
                <h2> {firstName} {lastName} </h2>
                <p>{age} {valorAge}</p>
                { children }
                <button onClick={suma}>Birthday Button for Jone Doe </button>
            </>
        ) 
    }
}
export default PersonCard;