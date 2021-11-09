import Task from '../components/Task';

export default {
  title: 'Component/Task',
  component: Task,
};

export const Default = () => {
  return <Task id={'11'} completed={true} content={'TaskTest'} />;
};
