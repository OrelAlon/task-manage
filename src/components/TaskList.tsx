import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { updateTask, deleteTask } from "../features/task/taskSlice";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.task.tasks);
  const openTasks = tasks.filter((task) => task.open);
  const closedTasks = tasks.filter((task) => !task.open);

  console.log(openTasks);

  const handleUpdate = (id: string, value: string) => {
    dispatch(updateTask({ id, changes: { value } }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className='grid'>
        <div className='box'>
          <h2>Open Tasks</h2>

          {openTasks.map((task, index) => (
            <div key={task.id} draggable>
              <TaskCard
                name={task.value}
                id={task.id}
                open={task.open}
                index={index}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>

        <div className='box'>
          <h2>Closed Tasks</h2>

          {closedTasks.map((task, index) => (
            <div key={task.id} draggable>
              <TaskCard
                name={task.value}
                id={task.id}
                open={task.open}
                index={index}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
