import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import Main from './main/Main';
import About from './about/About';
import PriceList from './price/PriceList';
import AppCarousel from './components/AppCarousel';
import ContactPanel from './components/ContactPanel';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import { history } from './root/store';
import {connect} from 'react-redux';
import Contact from './contact/Contact';
import Partner from './partner/Partner';


//https://react-bootstrap.github.io/components.html#media-content
//https://medium.com/byte-sized-react/hosting-react-and-a-rest-api-with-express-28f7ba5a4cc4
class App extends Component {
  //add property to package json for development
	//"proxy" : "http://localhost:5000",
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello2');
    const body = await response.json();
	  if (response.status !== 200) throw Error(body.message);
	  console.log(body);
    return body;
  };
	
	
  render() {
    let appData = this.props.app;
    return (
      <ConnectedRouter history={history} >
        <div className="App">
          <div>
            <ContactPanel data={appData.contactData}></ContactPanel>
          </div>
          <div>
            <AppCarousel data={appData.carouselData}></AppCarousel>
          </div>  
          <NavBar></NavBar>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/main' component={Main}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/partner' component={Partner}/>
                <Route path='/pricelist' component={PriceList}/>
              </Switch>
          
          <Footer></Footer>
        </div>
      </ConnectedRouter>
     
    );
  }
}

const mapToStateProps = state => {
  return {
    app : state.appState,
  }
}

export default connect(mapToStateProps/*, mapDispatchToProps*/)(App);
