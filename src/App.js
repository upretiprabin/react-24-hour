import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MainApp from './container/App';
import store from './store';

const App = () => (
    <Provider store={store}>
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
