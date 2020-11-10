import React from 'react';
const IsLoggedContext = React.createContext([]);
export default IsLoggedContext;
//Se define el contexto para utilizar el ámbito 
//renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol