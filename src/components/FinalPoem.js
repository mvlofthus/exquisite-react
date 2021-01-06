import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const fullPoem = () => {
    if (props.isSubmitted === true) {
      props.submissions.map((line) => {
        return <p>{line}</p>;
      })
    } else { 
        return 'no submissions yet';
      }
    }
  

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        <div>
        {console.log('poem is:' + props.submissions)}
        {console.log('isSubmitted is:' + props.isSubmitted)}
        {props.submissions.map((line) => {
          return <p>{line}</p>;}
        )}

        {/* {fullPoem()} */}
       </div>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
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
