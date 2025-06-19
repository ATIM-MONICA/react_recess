import './App.css';
import GreetingCard from './GreetingCard';
import './GreetCard.css';

function App() {
  
  return (
    <div className='greet-card'>
      <GreetingCard  
      name = 'Monica'
      age = '27'
      school = 'WITU'
      address = 'BUKOTO'
      />

      <GreetingCard  
      name = 'Sharry'
      age = '28'
      school = 'LDC'
      address = 'LDC Court'
      />

      <GreetingCard  
      name = 'Mark'
      age = '40'
      school = 'Awindiri'
      address = 'Adjumani'
      />
    </div>
   
  );
}

export default App;
