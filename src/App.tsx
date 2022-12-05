import { useState } from 'react'
import Logo from './assets/logo.svg'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';


// const initialItems = [
//   { id: '1', content: 'Task 1' },
//   { id: '2', content: 'Task 2' }
// ]
// const initialColumns = [
//   {
//     name: 'To do',
//     id: '123',
//     items: initialItems,
//   }
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

function App() {
  // const [columns, setColumns] = useState(initialColumns)
  const [todo, setTodo] = useState(listItems)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return

    const items = Array.from(todo)
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder)

    setTodo(items);
  }

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
  })

  return (
    <>
      <div>
        <img src={Logo} alt="Flow logo" />
      </div>

      <div>
        <label htmlFor="">
          <input type="text" placeholder='Buscar tarefa' />
          <FiSearch />
        </label>
      </div>

      <div>
        <button>
          <FiPlus />
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId='todo'
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {(todo.map(({ id, content }, index) => {
                return (
                  <Draggable
                    key={id}
                    draggableId={id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        {content}
                      </div>
                    )}
                  </Draggable>
                )
              }))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* <DragDropContext onDragEnd={onDragEnd}>
        {initialColumns.map((column) => (
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
              >
                <h1>{column.name}</h1>
                <div>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          style={{ ...provided.draggableProps.style }}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext> */}
    </>
  )
}

export default App
