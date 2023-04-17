import React from 'react';

//how to make class-based component?
class Navbar extends React.Component {
    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">dummyKart</a>
          
        </div>
        </nav>
        );
    }
}
 
export default Navbar;