import logo from './logo.svg';
import ReactDOM from 'react-dom';

import './App.css';

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}


setInterval(tick, 1000)

export default Clock;
