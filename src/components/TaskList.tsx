import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { updateTask, deleteTask } from "../features/task/taskSlice";
import { Grid } from "./styles/Grid.styled";
import { List } from "./styles/List.styled";

import TaskCard from "./TaskCard";

export default function TaskList() {
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.task.tasks);
  const openTasks = tasks.filter((task) => task.open);
  const closedTasks = tasks.filter((task) => !task.open);

  const handleUpdate = (id: string, value: string) => {
    dispatch(updateTask({ id, changes: { value } }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleToggleOpen = (id: string) => {
    dispatch(
      updateTask({
        id,
        changes: { open: !tasks.find((task) => task.id === id)?.open },
      })
    );
  };

  return (
    <>
      <Grid>
        <List>
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
                onToggleOpen={handleToggleOpen}
              />
            </div>
          ))}
        </List>

        <List>
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
                onToggleOpen={handleToggleOpen}
              />
            </div>
          ))}
        </List>
      </Grid>
    </>
  );
}
