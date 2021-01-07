import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  // const [gameOver, setGameOver] = useState('false')

  const finalizeGame = () => {
    // setGameOver(true);
    props.revealPoem();
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem" style ={{ display: props.finalized ? 'block' : 'none' }}>
        <h3>Final Poem</h3>

        <div>
        {props.submissions.map((line) => {
          return <p>{line}</p>;}
        )}
        </div>

      </section>

      <div className="FinalPoem__reveal-btn-container" style ={{ display: props.finalized ? 'none' : 'block' }}>
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={finalizeGame} />
      </div>

      
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
