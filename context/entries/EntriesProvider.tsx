import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pendiente: Aute do deserunt duis reprehenderit occaecat velit do exercitation exercitation nisi.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'En-Progreso Incididunt sint nisi minim deserunt ea anim nostrud aliqua tempor aliquip aliquip velit laborum ullamco.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Terminadas: Commodo in eu minim minim excepteur tempor excepteur occaecat do ipsum deserunt incididunt fugiat incididunt.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] Entry-Updated', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
