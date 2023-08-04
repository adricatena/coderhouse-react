import styles from "./TaskList.module.css";

import Task from "../Task/Task";

const TaskList = ({
  tasks,
  handleChangeTaskState,
  filterState,
  handleChangeFilter,
}) => {
  return (
    <>
      <label>
        Filtro por estado
        <select id="filter" value={filterState} onChange={handleChangeFilter}>
          <option value="all">Todos</option>
          <option value="completed">Completados</option>
          <option value="incompleted">No completados</option>
        </select>
      </label>
      <section className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleChangeTaskState={handleChangeTaskState}
          />
        ))}
      </section>
    </>
  );
};

export default TaskList;
