import React from 'react';

// GreetingCard component that receives props
const GreetingCard = ({ name, age, school, address }) => {
  return (
    <div className="greeting-card">
      <h2>Hello, my name is {name}!</h2>
      <p>I am {age} years old.</p>
      <p>I study at {school}.</p>
      <p>I live at {address}.</p>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <GreetingCard name="Monica" age={27} school="Witi" address="Bukoto" />
      <GreetingCard name="Mark" age={24} school="Makerere" address="Kampala" />
      <GreetingCard name="Sharon" age={26} school="LDC" address="Kampala" />
    </div>
  );
};

export default App;
