import styled from '@emotion/styled';
import TaskProvider from './contexts/TaskProvider';
import Header from './components/Header';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <TaskProvider>
      <Container>
        <Header>Task Todos</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
}

export default App;
