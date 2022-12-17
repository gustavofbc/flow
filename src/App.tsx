import { useState } from 'react'
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Home from './pages/Home';
import Column from './components/Column';
import InsertColumn from './components/InsertColumn';
import InsertTask from './components/InsertTask';


// const initialItems = [
//   { id: '1', content: 'Task 1' },
//   { id: '2', content: 'Task 2' }
// ]

interface TaskProps {
  id: number,
  content: string,
  isCompleted: boolean,
  idColumn: number
}

interface ColumnProps {
  id: number,
  name: string,
  listTasks: Array<TaskProps>[],
}

// const listItems = [
//   {
//     id: '1',
//     content: 'Task 1'
//   },
//   {
//     id: '2',
//     content: 'Task 2'
//   },
//   {
//     id: '3',
//     content: 'Task 3'
//   },
//   {
//     id: '4',
//     content: 'Task 4'
//   },
// ]

// const initialColumns = [
//   {
//     name: 'To do',
//     id: 1,
//     items: listItems,
//   },
//   {
//     name: 'Doing',
//     id: 2,
//     items: listItems,
//   },
// ]

function App() {
  const [columns, setColumns] = useState<ColumnProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [lastIdColumn, setLastIdColumn] = useState(0);
  const [newColumnTitle, setNewColumnTitle] = useState('')
  const [lastIdTask, setLastIdTask] = useState(0);
  // const [newTaskTitle, setNewTaskTitle] = useState('');

  const [isEditing, setIsEditing] = useState(false)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return

    const items = Array.from(tasks)
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder)

    setTasks(items);
  }

  function HandleCreateNewColumn() {
    event?.preventDefault();

    if (newColumnTitle != '') {
      const newColumn = {
        name: newColumnTitle,
        id: lastIdColumn + 1,
        listTasks: []
      }

      const result = [...columns, newColumn]

      setColumns(result);
      setLastIdColumn(newColumn.id);
      setNewColumnTitle('');
    }
    return;
  }

  function editColumn(idColumn: number, newTitle: string) {
    setIsEditing(true);
    event?.preventDefault();
    const columnsArray = [...columns];

    for (var i in columnsArray) {
      if (columnsArray[i].id === idColumn) {
        columnsArray[i].name = newTitle
      }
    }
    setColumns(columnsArray);
  }

  function deleteColumn(idColumn: number) {
    const columnsArray = [...columns];
    const result = columnsArray.filter((column) => column.id !== idColumn)
    setColumns(result);
  }

  // function addNewTask(idColumn: number) {
  //   if (newTaskTitle != '') {
  //     const newTask = {
  //       id: lastIdTask + 1,
  //       content: newTaskTitle,
  //       isCompleted: false,
  //       idColumn: idColumn
  //     }

  //     const result = [...tasks, newTask]
  //     setTasks(result);
  //     // columnsArray.map((column) => {
  //     //   if (column.id === idColumn) {
  //     //     column.listTasks.push()
  //     //   }
  //     // })
  //   }
  // }

  // const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  //   padding: 10,
  // })

  return (
    <>
      <Home />
      {/* <button onClick={() => addNewTask(1)}>a</button> */}
      <div className='columns'>
        <button onClick={() => console.log(tasks)}>a</button>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              droppableId={'task'}
              nameColumn={column.name}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editColumn={editColumn}
              deleteColumn={deleteColumn}
              taskList={tasks}
              setTasks={setTasks}
              // newTaskTitle={newTaskTitle}
              // setNewTaskTitle={setNewTaskTitle}
              lastIdTask={lastIdTask}
              setLastIdTask={setLastIdTask}
            />
          ))}
        </DragDropContext>
        <InsertColumn
          addColumn={HandleCreateNewColumn}
          setNewColumnTitle={setNewColumnTitle}
          nameColumn={newColumnTitle}
        />
      </div>

    </>
  )
}

export default App
