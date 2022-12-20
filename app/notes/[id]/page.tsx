import fs from 'fs';

// Router
import ProtectedRoute from '../../../shared/router/ProtectedRoute';

// Styles
import styles from './Note.module.scss';

// Types
import { Note } from '../notes.types';

async function getNote(noteId: string): Promise<Note | undefined> {
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/data/notes.json', (err, data) => {
      if (err) {
        reject(err);
      }
      const notes: Note[] = JSON.parse(data.toString()).notes;
      const matchedNote = notes.find((note: Note) => note.id === noteId);
      resolve(matchedNote);
    });
  });
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <ProtectedRoute>
      <div className={styles['note']}>
        <h1>notes/{params.id}</h1>
        {note ? (
          <h3>{note.title}</h3>
        ) : (
          <div>Note with id {params.id} not found.</div>
        )}
      </div>
    </ProtectedRoute>
  );
}
