import './App.css';
import FormSignUp from './components/FormSignUp';
import { Container, Typography } from '@mui/material';
import { useState } from 'react';


function App() {
  const [datosForm, setDatosForm] = useState([])
  const manejarDatosForm = (datos) => {
    setDatosForm([...datosForm,datos])
  }

  return (
    <Container maxWidth="sm" component="Section">
      <Typography variant="h3" align="center"> Formulario </Typography>
      <FormSignUp manejarDatosForm={manejarDatosForm}/>
    </Container>
  );
}

export default App;
