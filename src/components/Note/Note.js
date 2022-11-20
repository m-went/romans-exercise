import { useDispatch } from 'react-redux';
import { removeNote } from '../../store/index';
import styles from './Note.module.scss';
import DeleteButton from '../DeleteUserButton/DeleteUserButton';

function Note({ title = 'Untitled', content = 'No content', id }) {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id: id }));
  };

  return (
    <div className={`${styles.note}`}>
      <h1 className={`${styles.noteTitle}`}>{title}</h1>
      <p>{content}</p>
      <DeleteButton className={`${styles.noteButton}`} removeNote={handleRemoveNote} />
    </div>
  );
}

export default Note;
