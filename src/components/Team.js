import React from 'react';

const Team = ({ data }) => {
  const team = [];
  if (data.length > 0) {
    data.forEach((element) => {
      if (element.type === 'team') {
        team.push(element);
      }
    });
  } else {
    return null;
  }
  return (
    <div>
      <h1>Team</h1>
      {team.map((t) => (
        <ul key={t.name}>
          <li>
            Type:{' '}
            {t.type.slice(0, 1).toUpperCase() + t.type.slice(1, t.type.length)}
          </li>
          <li>Name: {t.name}</li>
          <li>Sport: {t.sport}</li>
          <li>Team Crest: {t.teamCrest}</li>
        </ul>
      ))}
    </div>
  );
};

export default Team;
