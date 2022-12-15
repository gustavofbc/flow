import { useState } from 'react'
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Home from './pages/Home';
import Column from './components/Column';
import InsertColumn from './components/InsertColumn';


// const initialItems = [
//   { id: '1', content: 'Task 1' },
//   { id: '2', content: 'Task 2' }
// ]

interface TaskProps {
  id: number
  content: string
  // isCompleted: boolean
}

interface ColumnProps {
  id: number,
  name: string,
  listTasks: Array<TaskProps>[],
}

const listItems = [
  {
    id: '1',
    content: 'Task 1'
  },
  {
    id: '2',
    content: 'Task 2'
  },
  {
    id: '3',
    content: 'Task 3'
  },
  {
    id: '4',
    content: 'Task 4'
  },
]

const initialColumns = [
  {
    name: 'To do',
    id: 1,
    items: listItems,
  },
  {
    name: 'Doing',
    id: 2,
    items: listItems,
  },
]

function App() {
  const [columns, setColumns] = useState<ColumnProps[]>([])
  const [task, setTask] = useState(listItems)

  const [lastId, setLastId] = useState(0);
  const [newColumnTitle, setNewColumnTitle] = useState('')

  const [isEditing, setIsEditing] = useState(false)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return

    const items = Array.from(task)
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder)

    setTask(items);
  }

  function HandleCreateNewColumn() {
    event?.preventDefault();

    if (newColumnTitle != '') {
      const newColumn = {
        name: newColumnTitle,
        id: lastId + 1,
        listTasks: []
      }

      const result = [...columns, newColumn]

      setColumns(result);
      setLastId(newColumn.id);
      setNewColumnTitle('');
    }
    return;
  }

  function handleEditColumn(idColumn: number, newTitle: string) {
    setIsEditing(true);
    event?.preventDefault();
    const ColumnsArray = [...columns];

    for (var i in ColumnsArray) {
      if (ColumnsArray[i].id === idColumn) {
        ColumnsArray[i].name = newTitle
      }
    }
    setColumns(ColumnsArray)
  }

  // const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  //   padding: 10,
  // })

  return (
    <>
      <Home />
      <div className='columns'>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <Column
              key={column.id}
              idColumn={column.id}
              droppableId={'task'}
              nameColumn={column.name}
              taskList={task}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleEditColumn={handleEditColumn}
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
