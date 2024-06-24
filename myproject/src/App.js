// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      {/* <Hello />
      <Message messageContent="this is a message from props"/> */}
      {/* <Profile name="greg" lastname="norman"/> */}
      {/* <Counter /> */}
      <Resume name="Greg"/>
    </div>
  );
}

export default App;