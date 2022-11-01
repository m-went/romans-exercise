import styles from './AddUserForm.module.scss';
import { useContext } from 'react';
import { UsersContext } from '../../providers/UsersProvider';
import useForm from '../../hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

function AddUserForm(props) {
  const { addUser } = useContext(UsersContext);
  const { formState, handleClearForm, handleConsentToggle, handleInputChange, throwError } = useForm(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.consent) {
      addUser({ name: formState.name, attendance: formState.attendance, average: formState.average });
      handleClearForm();
    } else {
      throwError('You need to give consent');
    }
  };

  const changeInputValue = (e) => {
    handleInputChange(e);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <h1 className={`${styles.title}`}>Add new student</h1>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={changeInputValue}
          id="name"
          data-testid="name"
        />
      </div>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="attendance">Attendance:</label>
        <input
          type="text"
          name="attendance"
          value={formState.attendance}
          onChange={changeInputValue}
          id="attendance"
          data-testid="attendance"
        />
      </div>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="average">Average:</label>
        <input
          type="text"
          name="average"
          value={formState.average}
          onChange={changeInputValue}
          id="average"
          data-testid="average"
        />
      </div>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="consent">Consent:</label>
        <input type="checkbox" name="consent" onChange={handleConsentToggle} id="consent" checked={formState.consent} />
      </div>
      <button className={`${styles.button}`}>Add</button>
      {formState.error ? <p>{formState.error}</p> : null}
    </form>
  );
}

export default AddUserForm;
