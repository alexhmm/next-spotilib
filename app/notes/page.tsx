import fs from 'fs';
import Link from 'next/link';

// Router
import ProtectedRoute from '../../shared/router/ProtectedRoute';

// Styles
import styles from './Notes.module.scss';

// Types
import { Note as INote } from './notes.types';

type NoteProps = {
  note: INote;
};

function Note(props: NoteProps) {
  const { id, title } = props.note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

async function getNotes(): Promise<INote[] | undefined> {
  // const res = await fetch('url');
  // const data = await res.json();
  // return data?.items as any[];
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/data/notes.json', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data.toString()).notes);
    });
  });
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <ProtectedRoute>
      <div className={styles['notes']}>
        <h1>Notes</h1>
        <div>
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      </div>
    </ProtectedRoute>
  );
}
