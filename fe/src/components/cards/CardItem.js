import React, {Component} from "react";




class CardItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            color: "#cdc5b8"
        }
    }


    selectRoom = () =>{

        let newColor = this.state.color === '#cdc5b8' ? '#9b8f8a' : '#cdc5b8';
        this.setState({ color: newColor });

        if(newColor === '#9b8f8a'){
            console.log(this.props.text);
        }

    }


    render() {
        return (
            <li className={"cards-item"} style={{backgroundColor:this.state.color}}>
                <div className={"cards-item-link"} style={{backgroundColor:this.state.color}} >
                    <figure className={"cards-item-pic-wrap"} onClick={this.selectRoom}>
                        <img
                            src={this.props.src}
                            className={"cards-item-img"}
                            alt={""}
                        />
                    </figure>
                    <div className={"cards-item-info"} style={{backgroundColor:this.state.color}} onClick={this.selectRoom}>
                        <h5 className={"cards-item-text"} style={{backgroundColor:this.state.color}}>{this.props.text}</h5>
                    </div>
                </div>
            </li>

        );
    }
}

export default CardItem;