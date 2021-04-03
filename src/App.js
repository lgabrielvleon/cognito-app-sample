import './App.css';
import Routes from './Routes'

function App() {
  
  const childProps = {
    isAuthenticated: true,
    userHasAuthenticated: true
  };
  return (
    <>
      <Routes childProps={childProps}/>
    </>
  );
}

export default App;
