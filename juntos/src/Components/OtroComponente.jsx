import { Component } from "react"; 

class OtroComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorAge1:88
        };
    }
    render() {
        const suma = () => {
            this.setState({
                valorAge1: valorAge1 + 1,

            })
        }
        const { firstName1, lastName1 , age1, children} = this.props;
        const {valorAge1} = this.state;

        return (
            <>
                <h2> {firstName1} {lastName1} </h2>
                <p>{age1} {valorAge1}</p>
                { children }
                <button onClick={suma}>Birthday Button for Smith John</button>
            </>
        ) 
    }
}
export default OtroComponente;