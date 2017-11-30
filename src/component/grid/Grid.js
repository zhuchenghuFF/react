import React, { Component } from 'react';
import Http from '../../service/httpService';
import List from '../list/List';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }
    
    componentDidMount(props) {
        var params = {
            "url": "../../eoffice10/server/public/api/document",
            "param": {
                "limit": 20,
                "response":"data",
                "page": this.props.page,
                "fields":"document_content.document_id,document_content.subject,document_content.folder_id,document_content.creator,document_content.created_at",
            }
        }
        Http.get(params).then((response) => {
            if(response.data){
                this.setState({listItems: response.data.data})
            }
        });
    }
    render() {
        return (<List dataItems={this.state.listItems}/>);
    }
}
export default Grid;