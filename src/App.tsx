import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header'

const useStyles = makeStyles({
  root: {
    background: '#C6C6C6;',
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Route exact path='/' render={() => <h1>Peshoo</h1>} />
    </div>
  );
}

export default App;
