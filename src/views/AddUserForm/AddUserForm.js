import styles from './AddUserForm.module.scss';
import useForm from '../../hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

function AddUserForm() {
  const { formState, handleClearForm, handleConsentToggle, handleInputChange, throwError } = useForm(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.consent) {
      handleClearForm();
    } else {
      throwError('You need to give consent');
    }
  };

  const changeInputValue = (e) => {
    handleInputChange(e);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <h1 className={`${styles.title}`}>Add new user</h1>
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
        <div className={`${styles.inputConsentRow}`}>
          <label htmlFor="consent">Consent:</label>
          <input
            type="checkbox"
            name="consent"
            onChange={handleConsentToggle}
            id="consent"
            checked={formState.consent}
          />
        </div>
        <button className={`${styles.button}`}>Add</button>
        {formState.error ? <p>{formState.error}</p> : null}
      </form>
    </div>
  );
}

export default AddUserForm;
