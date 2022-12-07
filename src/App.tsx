import { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';
import Home from './pages/Home';
import Column from './components/Column';


// const initialItems = [
//   { id: '1', content: 'Task 1' },
//   { id: '2', content: 'Task 2' }
// ]

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
    id: '123',
    items: listItems,
  }
]

function App() {
  const [columns, setColumns] = useState(initialColumns)
  const [task, setTask] = useState(listItems)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return

    const items = Array.from(task)
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder)

    setTask(items);
  }

  // const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  //   padding: 10,
  // })

  return (
    <>
      <Home />

      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <Column
            key={'123'}
            idColumn={'123'}
            nameColumn={column.name}
            taskList={task}
            droppableId={'task'}
          />
          // <Droppable
          //   droppableId='task'
          // >
          //   {(provided) => (
          //     <div>
          //       <h1>{column.name}</h1>
          //       <div
          //         {...provided.droppableProps}
          //         ref={provided.innerRef}
          //       >
          //         {(task.map(({ id, content }, index) => {
          //           return (
          //             <Draggable
          //               key={id}
          //               draggableId={id}
          //               index={index}
          //             >
          //               {(provided) => (
          //                 <div
          //                   ref={provided.innerRef}
          //                   {...provided.draggableProps}
          //                   {...provided.dragHandleProps}
          //                   style={provided.draggableProps.style}
          //                 >
          //                   {content}
          //                 </div>
          //               )}
          //             </Draggable>
          //           )
          //         }))}
          //         {provided.placeholder}
          //       </div>
          //     </div>
          //   )}

          // </Droppable>
        ))}
      </DragDropContext>

    </>
  )
}

export default App
