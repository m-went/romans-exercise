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
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <h1 className={`${styles.title}`}>Add new student</h1>{' '}
      <div className={`${styles.inputRow}`}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={input.name} onChange={changeInputValue} id="name" />{' '}
      </div>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="attendance">Attendance:</label>
        <input
          type="text"
          name="attendance"
          value={input.attendance}
          onChange={changeInputValue}
          id="attendance"
        />{' '}
      </div>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="average">Average:</label>
        <input type="text" name="average" value={input.average} onChange={changeInputValue} id="average" />
      </div>
      <button className={`${styles.button}`}>Add</button>
    </form>
  );
}

export default AddUserForm;