import React from 'react';
import Text from './Text';

class DayDiv extends React.Component {
   showDay (day){
    return <h2 className="myHeader">Today is {day}!</h2>;
  }

  render() {
    return (
      <div className="main">
        <Text staticText="Text from child component"
              clickText={this.state.text} />
        <p>{this.state.text}</p>
        <button onClick={this.onButtonClick.bind(this)}>Click</button>
      </div>
    );
  }
}

export default AppComponent;
