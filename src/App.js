import './App.css';
import FormSignUp from './components/FormSignUp';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" component="Section">
      <Typography variant="h3"> Formulario </Typography>
      <FormSignUp/>
    </Container>
  );
}

export default App;
