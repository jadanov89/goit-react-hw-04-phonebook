// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import AddForm from './Form.styled';


// export default class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target: { value, name } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { onSubmit, currentContacts } = this.props;
//     const { state } = this;
//     const existingContact = currentContacts.find(
//       contact => state.name === contact.name
//     );

//     if (existingContact) {
//       return alert(`${state.name} is already in contacts .`);
//     }

//     onSubmit(state);

//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <AddForm onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">
//             Name
//             <input
//             id="name"
//               value={name}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="number">
//             Number
//             <input
//             id="number"
//               value={number}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <button type="submit">Add contact</button>
//       </AddForm>
//     );
//   }
// }

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   currentContacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddForm from './Form.styled';

const Form = ({ onSubmit, currentContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const existingContact = currentContacts.find(contact => name === contact.name);

    if (existingContact) {
      return alert(`${name} is already in contacts.`);
    }

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="number">
          Number
          <input
            id="number"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add contact</button>
    </AddForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Form;
