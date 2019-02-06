import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'

const Home = () => (
<div>
  <h1>home page</h1>
  <p>welcome to the homepage of this site</p>
</div>
);
const About = () => <h1>About</h1>
const Phone = () =>(
  <div>
      <h1>Phone Contact</h1>

      <p>Phone number: 512-343-3243</p>
    </div>
);
const Email = () => (
<div>
      <h1>Email Contact</h1>
      <p>email: blahblah@gmail.com</p>
    </div>
);
const Fax = () => (
<div>
      <h1>Fax Contact</h1>
      <p>fax: 512-900-3243</p>
    </div>
);
const All = () => (
  <div>
    <div>
      <Phone />
    </div>
    <div>
      <Email />
    </div>
    <div>
      <Fax />
    </div>
  </div>
);
const Contact = () =>{
  return (
    <div className="contacts">
        <Router>
          <div>
          <nav>
            <Link to="/contact/phone">phone</Link> &nbsp;
            <Link to="/contact/email">email</Link> &nbsp;
            <Link to="/contact/fax">fax</Link> &nbsp;
            <Link to="/contact/all">all contacts</Link>
          </nav>
        <Route exact path="/contact/phone" component={Phone} />
        <Route exact path="/contact/email" component={Email} />
        <Route exact path="/contact/fax" component={Fax} />
        <Route exact path="/contact/all" component={All} />

        </div>
        </Router>
    </div>
  );

}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
            <nav>
              <Link to="/">Home</Link> &nbsp;
              <Link to="/about">About</Link> &nbsp;
              <Link to="/contact">Contact</Link> &nbsp;
            </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
