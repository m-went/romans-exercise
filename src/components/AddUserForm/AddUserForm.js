import styles from './AddUserForm.module.scss';
import { useState } from 'react';

function AddUserForm(props) {
  const [input, setInput] = useState({ name: '', attendance: '', average: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addUser(input);
    setInput({ name: '', attendance: '', average: '' });
  };

  const changeInputValue = (e) => {
    setInput((st) => ({ ...st, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={input.name} onChange={changeInputValue} id="name" />
      <label htmlFor="attendance">Attendance:</label>
      <input type="text" name="attendance" value={input.attendance} onChange={changeInputValue} id="attendance" />
      <label htmlFor="average">Average:</label>
      <input type="text" name="average" value={input.average} onChange={changeInputValue} id="average" />
      <button>Add</button>
    </form>
  );
}

export default AddUserForm;
