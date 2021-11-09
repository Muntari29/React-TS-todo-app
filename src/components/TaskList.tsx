import styled from '@emotion/styled';
import { useTasks } from '../contexts/TaskProvider';
import Task from './Task';

const TaskList = (props: any) => {
  const { tasks } = useTasks();
  return (
    <UnorderedList>
      {tasks.map((item) => (
        <Task id={item.id} content={item.content} completed={item.completed} />
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

export default TaskList;
