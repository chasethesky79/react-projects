import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List'

const App = () => {
    return (
      <div className='container-fluid'>
        <nav className='navbar sticky-top navbar-light bg-dark'>
           <hi className='navbar-brand text-light'>Movie List</hi>
        </nav>
        <List/>
      </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))