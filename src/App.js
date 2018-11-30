import React from 'react';
import ReactDOM from 'react-dom';

const title = `My Minimal React Webpack Babel Setup v2
Loving Literals
ES6 is da bomb dot com

Next Step is add in react-router or reach-router, then decided on the project directory structure`;

class App extends React.Component {

    render () {
        return (
            <div><div>{title}</div></div>
        );
    }
}

export default App;