import styles from './NoteWidget.module.scss';
import Note from '../Note/Note';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const NoteWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);
  return (
    <div className={`${styles.noteWidget} ${isOpen ? styles.openWidget : ''}`}>
      <button className={`${styles.widgetButton}`} onClick={handleToggleWidget}>
        notes
      </button>
      <div className={`${styles.notesList}`}>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </div>
    </div>
  );
};

export default NoteWidget;
