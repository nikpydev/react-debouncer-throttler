import './App.css';
import DebouncerExample from './DebouncerExample';
import ThrottlerExample from './ThrottlerExample';

const App = () => {
  return (
    <>
      <h1>Throttler</h1>
      <ThrottlerExample />

      <h1>Debouncer</h1>
      <DebouncerExample />
    </>
  );
};

export default App;
