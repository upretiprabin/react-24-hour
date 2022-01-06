/**
 * Redux store to app is passed from here
 * */

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MainApp from './container/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {configureStore} from "./redux/store";

const App = () => (
    <Provider store={configureStore()}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router>
          <Switch>
            <Route path="/" component={MainApp} />
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </Provider>
);


export default App;
