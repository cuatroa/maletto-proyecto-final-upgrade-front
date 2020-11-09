import React from 'react';
const IsLoggedContext = React.createContext([]);
export default IsLoggedContext;
//renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol