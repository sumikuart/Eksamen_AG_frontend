// Import af moduler
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Style:
import './global.style.scss'


// Components:
import NavigationsBar from './components/global/navigation/navigation.component';
import FooterComponent from './components/global/footer/footer.component';
import MainHome from './components/local/home/mainHome.component';
import DetaljeComponent from './components/local/detaljevisning/detaljevisning.component';
import AdminComponent from './components/local/admin/admin.component';
import VisAlleComponent from './components/local/visAlle/visAll.component';



function App() {
  return (
    <div className="App">

    <Router>

      <header>
        <NavigationsBar />
      </header>

      <main>

     
      <Route exact path="/" component={MainHome} />
      <Route exact path="/animal/:id" component={DetaljeComponent} />

      <Route path="/animalList" component={VisAlleComponent} />

      <Route path="/admin" component={AdminComponent} />

      
      </main>

      <footer>
        <FooterComponent />
      </footer>

      </ Router>

    </div>
  );
}

export default App;
