
import {Switch,Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';



function App() {
  return (
     <Layout>
        <Switch>
          <Route path="/new-meetup">
              <NewMeetups/>
          </Route>
          <Route path="/favorites-meetup">
              <Favorites/>
          </Route>
          <Route path="/">
              <AllMeetups/>
          </Route>
        </Switch>
     </Layout>
  );
}

export default App;
