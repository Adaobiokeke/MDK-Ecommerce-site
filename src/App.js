import Homepage from './Homepage/Homepage'
import  { 
  BrowserRouter as Router,  Route,} from 'react-router-dom'
import Login from './Login/Login';
import DivContainers from './ModalContainers/DivContainers';
import Shoes from './Shoes/Shoes';
import Bags from './Bags/Bags';
import Jewelries from './Jewelries/Jewelries';
import Carousel from './Carousel/Carouselimages';
import Product from './Product/Productpg'




  function App() {
  return (
    <Router>
    <div className='App'>
    <Route exact path='/'component={Homepage}/>
    <Route path='/login'component={Login}/>
    <Route path='/divcontainers'component={DivContainers}/>
    <Route path='/shoes'component={Shoes}/>
    <Route path='/bags'component={Bags}/>
    <Route path='/jewelries'component={Jewelries}/>
    <Route path='/carousel'component={Carousel}/>
    <Route path='/product'component={Product}/>
 
 </div>
    </Router>
  );
}

export default App;
