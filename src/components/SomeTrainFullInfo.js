import React, { Component } from "react"
import Closer from "./Closer"
import TrainGeneralInfo from "./TrainGeneralInfo"
import TrainRoute from "./TrainRoute"

class SomeTrainFullInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps
        });
    }

    render() {
        return (
            <div className="SomeTrainFullInfo row">
                <div className="item item-10"></div>
                <div className="item item-2">
                    <Closer closeFullInfo = { this.state.closeFullInfo }/>
                </div>
                <div className="item item-6">
                    <TrainGeneralInfo { ...this.state }/>
                </div>
                <div className="item item-6">
                    <TrainRoute { ...this.state }/>
                </div>
            </div>
        )
    }
}

export default SomeTrainFullInfo;