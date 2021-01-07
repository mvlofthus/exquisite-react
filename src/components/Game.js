import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [poem, setPoem] = useState([]);
  const [playerCount, setPlayerCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastLine, setLastLine] = useState('')
  const [finalized, setFinalized] = useState(false)

  const onPoemLineSubmit = (line) => {
    let tempPoem = [...poem, line];
    // tempPoem.push(line);
    setLastLine(line);
    setPoem(tempPoem);
    setPlayerCount(playerCount + 1);
    setIsSubmitted(true);
  }

   const revealPoem = () => {
    setFinalized(true);
    }


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>


      {/* use CSS to change to display: none */}
      <div style ={{ display: finalized ? 'none' : 'block' }}>
        
        <div style={{ display: lastLine == '' ? 'none' : 'block' }}>
          <RecentSubmission 
          submission={lastLine}/>
        </div> 

        <PlayerSubmissionForm 
        index={playerCount} 
        sendSubmission={onPoemLineSubmit}
        fields={FIELDS}
        />
      </div>
      
      
      <FinalPoem 
      submissions={poem}
      isSubmitted={isSubmitted}
      revealPoem={revealPoem}
      finalized={finalized}/>

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
