import './App.css';
import Team from './components/Team';
import Venue from './components/Venue';
import Fixture from './components/Fixture';

function App() {
  const initialState = [
    {
      type: 'team',
      name: 'England',
      sport: 'England Rugby',
      teamCrest: 'http://logo.com',
    },
    {
      type: 'venue',
      name: 'The Kings Arms',
      distance: '12.3km',
      image: 'http://image.com',
    },
    {
      type: 'fixture',
      team1: 'Man Utd',
      team2: 'Arsenal',
      name: null,
      startTime: '3pm Sunday 14th March',
      sportLogo: 'http://image.com',
    },
    {
      type: 'fixture',
      team1: null,
      team2: null,
      name: 'Grand Prix Bahrain',
      startTime: '8pm Sunday 14th March',
      sportLogo: 'http://image.com',
    },
  ];
  return (
    <div>
      <Team data={initialState} />
      <Venue data={initialState} />
      <Fixture data={initialState} />
    </div>
  );
}

export default App;
