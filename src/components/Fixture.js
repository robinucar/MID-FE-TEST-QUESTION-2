import React from 'react';

const Fixture = ({ data }) => {
  const lineStyle = {
    width: '20%',
    textAlign: 'left',
    marginLeft: 0,
  };
  const fixture = [];
  if (data.length > 0) {
    data.forEach((element) => {
      if (element.type === 'fixture') {
        fixture.push(element);
      }
    });
  } else {
    return null;
  }

  return (
    <div>
      <h1>Fixtures</h1>
      {fixture.map((f) => (
        <ul key={f.name}>
          <hr style={lineStyle} />
          <li>
            Type:{' '}
            {f.type.slice(0, 1).toUpperCase() + f.type.slice(1, f.type.length)}
          </li>
          <li>Team1: {f.team1 === null ? 'Uncertain' : f.team1}</li>
          <li>Team2: {f.team2 === null ? 'Uncertain' : f.team2}</li>
          <li>Name: {f.name === null ? 'Uncertain' : f.name}</li>
          <li>Start Time: {f.startTime}</li>
          <li>Sport Logo: {f.sportLogo}</li>
          <hr style={lineStyle} />
        </ul>
      ))}
    </div>
  );
};

export default Fixture;
