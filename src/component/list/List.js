import React, { Component } from 'react';
import "./list.css"

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    componentDidMount() {
        // console.log(this.props.dataItems)
        // var params = {
        //     "url": "eoffice10/server/public/api/document",
        //     "param": {
        //         "autoFixPage": 1,
        //         "limit": 5,
        //         "order_by": {
        //             "created_at":"desc"
        //         },
        //         "page": 1,
        //     }
        // }
        // Http.get(params).then(function(response){
        //     console.log(response.data);
        // })
        // fetch('eoffice10/server/public/api/document?api_token=c9c7fdac03c5fe60bde3110d062e27b488e46983b06816369934625f77fae1a1e4b067050650bb94f1bd188648df88392b6045ecb7a81b36c9b7843984841419').then(function(response) {
        //     return response.json();
        // }).then((data) => console.log(data)).catch(function(error) {
        //     console.log(error);
        // }); 
    }
    render() {
        return (
            <div className="table">
                <table>
                <tbody>
                <tr>
                    <th>创建人</th>
                    <th>创建时间</th>
                    <th>文档标题</th>
                    <th>文件夹</th>
                </tr>
                {this.props.dataItems.map((data) => <tr>
                    <td>{data.create_name}</td>
                    <td>{data.created_at}</td>
                    <td>{data.subject}</td>
                    <td>{data.folder_name}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default List;