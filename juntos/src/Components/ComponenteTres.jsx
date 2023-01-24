import { Component } from "react";

class ComponenteUltimo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edad:55
        };
    }
    render() {
        const suma = () => {
            this.setState({
                edad : edad + 1,

            })
        }
        const { firstN, lastN , edades, children} = this.props;
        const {edad} = this.state;

        return (
            <>
                <h2> {firstN} {lastN} </h2>
                <p>{edades} {edad}</p>
                { children }
                <button onClick={suma}>Birthday Button for Smith Maria</button>
            </>
        ) 
    }
}
export default ComponenteUltimo;