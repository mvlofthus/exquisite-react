import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  const blankFields = {
    the1: 'The',
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the2: 'the',
    adj2: '',
    noun2: '',
    punctuation: '.'
  }

  const [formFields, setFormFields] = useState(blankFields)

  const onLineSubmit = (event) => {
    event.preventDefault();
    
    let line = Object.values(formFields).join(' ');

    props.sendSubmission(line);
    setFormFields(blankFields);
  }

  const onInputChange = (event) => {
    const updatedFields = {...formFields};
    updatedFields[event.target.name] = event.target.value;
    setFormFields(updatedFields);
  }
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onLineSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }

          {props.fields.map((field) => {
            if (field.key) {
              return <input
                name= {field.key}
                key= {field.key}
                placeholder={field.placeholder}
                type="text" 
                onChange={onInputChange}
                value={formFields[field.key]}/>
            } else {
              return <div key={field}>{field}</div>;
            }
          })}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
