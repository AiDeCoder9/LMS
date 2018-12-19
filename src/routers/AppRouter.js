import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
import AddBookItem from '../components/AddBookItem';
import BookListPage from '../components/BookListPage';
import EditBookItem from '../components/EditBookItem';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';


  const AppRouter =()=>(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path="/" component={BookListPage} exact={true} />
        <Route path="/create" component={AddBookItem} />
        <Route path="/edit/:id" component={EditBookItem} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} /> 
        </Switch>
        </div>
    </BrowserRouter>
  );
  

  export default AppRouter;
  
  