import { useState, useEffect } from "react";

import TaskList from "../TaskList/TaskList";
import { getTasks } from "../../asyncMock";
import useFilterState from "../../hooks/useFilterState";

const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filterState, changeFilter } = useFilterState("all");

  useEffect(() => {
    getTasks()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChangeTaskState = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  if (loading) {
    return (
      <main>
        <h1>Cargando tareas...</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Lista de tareas</h1>
      <TaskList
        tasks={
          filterState === "all"
            ? tasks
            : tasks.filter(
                (task) =>
                  filterState === "completed" ? task.completed : !task.completed
                /* {
                if (filterState === "completed") return task.completed;
                return !task.completed;
              } */
              )
        }
        handleChangeTaskState={handleChangeTaskState}
        filterState={filterState}
        handleChangeFilter={changeFilter}
      />
    </main>
  );
};

export default TaskListContainer;
