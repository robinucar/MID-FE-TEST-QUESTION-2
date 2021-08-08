import React from 'react';

const Venue = ({ data }) => {
  const venue = [];
  if (data.length > 0) {
    data.forEach((element) => {
      if (element.type === 'team') {
        venue.push(element);
      }
    });
  } else {
    return null;
  }
  return (
    <div>
      <h1>Venue</h1>
      {venue.map((v) => (
        <ul key={v.name}>
          <li>
            Type:{' '}
            {v.type.slice(0, 1).toUpperCase() + v.type.slice(1, v.type.length)}
          </li>
          <li>Name: {v.name}</li>
          <li>Sport: {v.sport}</li>
          <li>Team Crest: {v.teamCrest}</li>
        </ul>
      ))}
    </div>
  );
};

export default Venue;
