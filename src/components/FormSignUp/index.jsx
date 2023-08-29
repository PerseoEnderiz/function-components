/* import React, { useState } from "react";
import { TextField, Switch, FormControlLabel, Button, FormGroup } from "@mui/material";

function FormSignUp({manejarDatosForm}) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nombre,
      apellido,
      correo,
      novedades,
      promociones
    };
    console.log(data);
    manejarDatosForm(data);
  };

  const formulario = (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </form>
  );

  return formulario;
}

export default FormSignUp;

 */
import React, { useState } from "react";
import { TextField, Switch, FormControlLabel, Button, FormGroup } from "@mui/material";

function FormSignUp({manejarDatosForm}) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [novedades, setNovedades] = useState(true);
  const [promociones, setPromociones] = useState(true);
  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [correoError, setCorreoError] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    if (event.target.value.length < 3) {
      setNombreError(true);
    } else {
      setNombreError(false);
    }
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
    if (event.target.value.length < 3) {
      setApellidoError(true);
    } else {
      setApellidoError(false);
    }
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    if (!event.target.value.includes("@")) {
      setCorreoError(true);
    } else {
      setCorreoError(false);
    }
  };

  const handleNovedadesChange = (event) => {
    setNovedades(event.target.checked);
  };

  const handlePromocionesChange = (event) => {
    setPromociones(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nombreError && !apellidoError && !correoError) {
      const data = {
        nombre,
        apellido,
        correo,
        novedades,
        promociones
      };
      console.log(data);
      manejarDatosForm(data);
    }
  };

  const formulario = (
    <form onSubmit={handleSubmit}>
      <TextField
        id="nombre"
        label="Nombre"
        value={nombre}
        onChange={handleNombreChange}
        fullWidth
        margin="normal"
        error={nombreError}
        helperText={nombreError ? "El nombre debe tener al menos tres caracteres" : ""}
      />
      <TextField
        id="apellido"
        label="Apellido"
        value={apellido}
        onChange={handleApellidoChange}
        fullWidth
        margin="normal"
        error={apellidoError}
        helperText={apellidoError ? "El apellido debe tener al menos tres caracteres" : ""}
      />
      <TextField
        id="correo"
        label="Correo electrónico"
        value={correo}
        onChange={handleCorreoChange}
        fullWidth
        margin="normal"
        error={correoError}
        helperText={correoError ? "El correo electrónico debe contener un @" : ""}
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
      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </form>
  );

  return formulario;
}

export default FormSignUp;
