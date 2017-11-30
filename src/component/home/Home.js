import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
      <div>首页</div>
      {this.props.children}
      </div>
    );
  }
};

export default Home;
