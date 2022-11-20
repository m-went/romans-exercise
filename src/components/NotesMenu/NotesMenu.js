import styles from './NotesMenu.module.scss';
import Note from '../Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../store/index';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }));
  };

  return (
    <div className={`${styles.notesMenu}`}>
      <div className={`${styles.addNoteForm}`}>
        <form onSubmit={handleSubmit(handleAddNote)} className={`${styles.loginForm}`}>
          <div className={`${styles.inputRow}`}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" {...register('title', { required: true })} />
          </div>
          <div className={`${styles.inputRow}`}>
            <label htmlFor="content">Content:</label>
            <textarea name="content" id="content" {...register('content', { required: true })} />
          </div>
          <button className={`${styles.button}`} type="submit">
            Add
          </button>
        </form>
      </div>
      <div className={`${styles.allNotesList}`}>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
