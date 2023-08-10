import logo from './logo.svg';
import './App.css';
import LifeCycleExample from './component/LifeCycleExample';
import { Component } from 'react';
import UseMemoExample from './component/UseMemoExample';
import UseMemoExample2 from './component/UseMemoExample2';
import Average from './component/Average';
import UseCallbackExample from './component/UseCallbackExample';
import BoxSize from './component/BoxSize';
import AverageCallback from './component/AverageCallback';

class App extends Component {
  state = { color: 'red' }

  handleClick = () => {
    this.setState({
      color: this.state.color === 'red' ? 'blue' : 'red'
    })
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick} style = {{color:this.state.color}}>{this.state.color}</button> */}
        {/* <LifeCycleExample color={this.state.color}></LifeCycleExample> */}
        {/* <UseMemoExample/> */}
        {/* <UseMemoExample2/> */}
        {/* <Average/> */}
        {/* <UseCallbackExample/> */}
        {/* <BoxSize></BoxSize> */}
        <AverageCallback />
      </div>
    );
  }

}

export default App;
