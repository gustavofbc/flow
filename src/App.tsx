import { useEffect, useState } from 'react'
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Home from './pages/Home';
import Column from './components/Column';
import InsertColumn from './components/InsertColumn';

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
  listTasks: TaskProps[],
}

function App() {
  const [columns, setColumns] = useState<ColumnProps[]>([]);
  const [newColumnTitle, setNewColumnTitle] = useState('')

  const [lastIdColumn, setLastIdColumn] = useState(0);
  const [lastIdTask, setLastIdTask] = useState(0);
  const [a, setA] = useState(0);

  const [isEditing, setIsEditing] = useState(false)

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return

    let sourceColumnsItems: TaskProps[] = [];
    let destinationColumnItems: TaskProps[] = [];
    let draggedItem: any = {};

    let sourceColumnId = 0;
    let destinationColumnId = 0;

    for (var i in columns) {
      if (String(columns[i].id) == source.droppableId) {
        sourceColumnsItems = columns[i].listTasks;
        sourceColumnId = Number(i);
      } else if (String(columns[i].id) == destination.droppableId) {
        destinationColumnItems = columns[i].listTasks;
        destinationColumnId = Number(i);
      }
    }
    // console.log(sourceColumnId)
    // console.log(destinationColumnId)


    for (var i in sourceColumnsItems) {
      if (String(sourceColumnsItems[i].id) == draggableId) {
        draggedItem = sourceColumnsItems[i];
      }
    }

    //excluir a task arrastada
    let filteredSourceColumnItems = sourceColumnsItems.filter((item) => String(item.id) != draggableId)

    //adiciona a task arrastada em uma nova posição
    if (source.droppableId == destination.droppableId) {
      filteredSourceColumnItems.splice(destination.index, 0, draggedItem);

      //atualiza o state
      let columnsCopy = JSON.parse(JSON.stringify(columns));
      columnsCopy[sourceColumnId].listTasks = filteredSourceColumnItems;
      setColumns(columnsCopy)
    } else {
      //atualiza o campo idColumn na task
      draggedItem.idColumn = destinationColumnId + 1;
      destinationColumnItems.splice(destination.index, 0, draggedItem);
      //atualiza o state
      let columnsCopy = JSON.parse(JSON.stringify(columns));
      columnsCopy[sourceColumnId].listTasks = filteredSourceColumnItems
      columnsCopy[destinationColumnId].listTasks = destinationColumnItems;
      setColumns(columnsCopy)
    }
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

  function addTaskInColumn(idColumn: number, newTask: TaskProps) {
    const columnsArray = [...columns];
    const result = columnsArray.filter((column) => column.id === idColumn)
    const arrayTaskList = [...result[0].listTasks, newTask]

    for (var i in columnsArray) {
      if (columnsArray[i].id === idColumn) {
        columnsArray[i].listTasks = arrayTaskList
      }
    }
    setColumns(columnsArray);
  }

  // const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  //   padding: 10,
  // })
  function deleteTask(idTask: number, idColumn: number) {
    const response = confirm('Tem certeza de que deseja deletar esta tarefa?')
    if (response === true) {
      const columnsArray = [...columns];
      const result = columnsArray.filter((column) => column.id === idColumn)
      const arrayTaskList = [...result[0].listTasks]
      const newList = arrayTaskList.filter((task) => task.id !== idTask)
      for (var i in columnsArray) {
        if (columnsArray[i].id === idColumn) {
          columnsArray[i].listTasks = newList
        }
      }
      setColumns(columnsArray);
    }
    else {
      return
    }
  }

  return (
    <>
      <Home />
      <div className='columns'>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              droppableId={String(column.id)}
              nameColumn={column.name}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editColumn={editColumn}
              deleteColumn={deleteColumn}
              lastIdTask={lastIdTask}
              setLastIdTask={setLastIdTask}
              addTaskInColumn={addTaskInColumn}
              tasks={column.listTasks}
              deleteTask={deleteTask}
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
