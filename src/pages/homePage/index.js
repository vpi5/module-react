import React from 'react';

/**
 *
 *  @param HomePage
 *
 */

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log(webConfig);
        // this.props.history.push
    }

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    render(){
        return (
            <div onClick={() => {}}>
                HomePage
            </div>
        )
    }
}
