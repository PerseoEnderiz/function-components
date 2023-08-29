import { Button, Switch } from "@mui/material";

function FormSignUp() {
  const formulario = (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />
      <br />
      <br />
      <label htmlFor="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" />
      <br />
      <br />
      <label htmlFor="correo">Correo electrónico:</label>
      <input type="email" id="correo" name="correo" />
      <br />
      <br />
      <Switch id="novedades" name="novedades" />
      <label htmlFor="novedades">Novedades</label>
      <br />
      <br />
      <Switch type="checkbox" id="promociones" name="promociones" />
      <label htmlFor="promociones">Promociones</label>
      <br />
      <br />
      <Button variant="contained">Registrarse</Button>

    </form>
  );

  return formulario;
}

export default FormSignUp;
