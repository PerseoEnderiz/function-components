import React, { useState } from "react";
import { TextField, Switch, FormControlLabel, Button, FormGroup } from "@mui/material";

function FormSignUp() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [novedades, setNovedades] = useState(true);
  const [promociones, setPromociones] = useState(true);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleNovedadesChange = (event) => {
    setNovedades(event.target.checked);
  };

  const handlePromocionesChange = (event) => {
    setPromociones(event.target.checked);
  };

  const formulario = (
    <form>
      <TextField
        id="nombre"
        label="Nombre"
        value={nombre}
        onChange={handleNombreChange}
        fullWidth
        margin="normal"
      />
      <TextField
        id="apellido"
        label="Apellido"
        value={apellido}
        onChange={handleApellidoChange}
        fullWidth
        margin="normal"
      />
      <TextField
        id="correo"
        label="Correo electrónico"
        value={correo}
        onChange={handleCorreoChange}
        fullWidth
        margin="normal"
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={novedades} onChange={handleNovedadesChange} />}
          label="Novedades"
        />
        <FormControlLabel
          control={<Switch checked={promociones} onChange={handlePromocionesChange} />}
          label="Promociones"
        />
      </FormGroup>
      <Button variant="contained" color="primary">
        Registrarse
      </Button>
    </form>
  );

  return formulario;
}

export default FormSignUp;

