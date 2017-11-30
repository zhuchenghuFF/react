import React, { Component } from 'react';
import Grid from '../grid/Grid';
import './layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // layoutItems: [1,2,3,4,5,6,7,8,9]
        };
        
    }
    // componentDidMount(props) {
        // console.log(this.props.number);
        // for(let i = 1; i < this.props.number; i++){
        //     this.state.layoutItems.push(<Grid page={i}/>)
        // }
            // const numbers = [1, 2, 3, 4, 5];
            // this.state.layoutItems = numbers.map((number) =>
            //   <Grid>{number}</Grid>
            // );
    // }
    render() {
        const number = this.props.number;
        let layoutItems = [];
        for(var i= 1; i <= number; i++){
            layoutItems.push(i);
        }
        const template = layoutItems.map((data) => <div className="layout"><Grid className="layout" page={data}  key={data.toString()}>{this.props.number}</Grid></div>);
        return (template);
    }
}
export default Layout;