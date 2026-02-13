import './App.scss'
import type { ColumnType } from './types';
import ColumnGroup from './components/ColumnGroup'
import { useState } from 'react';


function App() {
  const [columnList, setColumnList] = useState<ColumnType[]>([
    {
      id: 'column-1',
      title: 'To Do',
      tasks: [
        {
          id: 'task-1',
          title: 'Task 1',
          description: 'This is the description for Task 1.'
        },
        {
          id: 'task-2',
          title: 'Task 2',
          description: 'This is the description for Task 2.'
        }
      ]
    },
    {
      id: 'column-2',
      title: 'In Progress',
      tasks: [
        {
          id: 'task-3',
          title: 'Task 3',
          description: 'This is the description for Task 3.'
        }
      ]
    },
    {
      id: 'column-3',
      title: 'Done',
      tasks: []
    } 
  ])

  return (
    <>
      <header>
          <nav>              
          </nav>

      </header>

      <main>
          <h1>Kanban Tasks App</h1>

          <ColumnGroup columnList={columnList} />
      </main>

      <footer></footer>
    </>
  )
}

export default App
