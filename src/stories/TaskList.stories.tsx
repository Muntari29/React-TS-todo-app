import TaskList from '../components/TaskList';
import TaskProvider from '../contexts/TaskProvider';

export default {
  title: 'Component/TaskList',
  component: TaskList,
};

export const Default = () => {
  const task = [
    {
      id: '123',
      content: 'Test',
      completed: false,
    },
    {
      id: '1222',
      content: 'Test2',
      completed: true,
    },
  ];
  return (
    <TaskProvider initialTasks={task}>
      <TaskList />
    </TaskProvider>
  );
};
