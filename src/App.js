import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 className='header'> My Bike Showroom</h1>
        <Shop></Shop>

        <h3>How React Works ? </h3> <br/><br/>
        <p>It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want. </p> <br/><br/>
        <h3>Props Vs State ? </h3> <br/><br/>
        
        
        <p>In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.

The state can be initialized by props.

For example, a parent component might include a child component by calling. In this case there’s nothing useful going on, but imagine doing something different based on the prop value, probably setting a state value is best.

Props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component state.

Props are also used to allow child components to access methods defined in the parent component. This is a good way to centralize managing the state in the parent component, and avoid children to have the need to have their own state.</p> <br/><br/> 
    </div>
  );
}

export default App;
