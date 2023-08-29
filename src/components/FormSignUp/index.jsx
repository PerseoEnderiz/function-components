import React from "react";
import { TextField, Switch, FormControlLabel, Button, FormGroup } from "@mui/material";

function FormSignUp() {
  const formulario = (
    <form>
      <TextField id="nombre" label="Nombre" fullWidth margin="normal" />
      <TextField id="apellido" label="Apellido" fullWidth margin="normal" />
      <TextField id="correo" label="Correo electrónico" fullWidth margin="normal" />
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked/>}
          label="Novedades"
        />
        <FormControlLabel
          control={<Switch defaultChecked/>}
          label="Promociones"
        />
      </FormGroup>
      <br />
      <Button variant="contained" color="primary">
        Registrarse
      </Button>
    </form>
  );

  return formulario;
}

export default FormSignUp;
