import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LinkChat from "../sons/LinkChat";
import OptionsChat from "../sons/OptionsChat";

const config = { 
  botName: "Maletto Bot",
  initialMessages: [createChatBotMessage("¡Bienvenido a Maletto! ¿En qué podemos ayudarle?" ,{widget:"OptionsChat"})],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1eb2a6",
    },
    chatButton: {
      backgroundColor: "#1eb2a6",
    }
    
  },
  widgets: [
    {
      widgetName: "OptionsChat",
      widgetFunc: (props) => <OptionsChat {...props} />,
    },
    {
      widgetName: "SeguridadLinks",
      widgetFunc: (props) => <LinkChat {...props} />,
      props: {
        options: [
          {
            text: "¿Qué es el sistema de incriptación?",
            url:
              "https://es.wikipedia.org/wiki/Cifrado_(criptograf%C3%ADa)",
            id: 1,
          },
          {
            text: "Ley de Protección de Datos",
            url:
              "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "IncidenciasLinks",
      widgetFunc: (props) => <LinkChat {...props} />,
      props: {
        options: [
          {
            text: "Con el usuario",
            url:"",
            id: 1,
          },
          {
            text: "Subida de archivos",
            url:"",
            id: 2,
          },
          {
            text: "Con un Guardian",
            url:"",
            id:3,
          },
        ],
      },
    },
    {
      //vincular con Greet
      widgetName: "FuncionamientoLinks",
      widgetFunc: (props) => <LinkChat {...props} />,
      props: {
        options: [
          {
            text: "Como hacerse Guardian",
            url:"",
            id: 1,
          },
          {
            text: "Como utilizar la aplicación",
            url:"",
            id: 2,
          },
          {
            text: "Gestionar tus reservas",
            url:"",
            id: 3,
          },
        ],
      },
    } , 
    {
      //vincular con Greet
      widgetName: "LlamanosLinks",
      widgetFunc: (props) => <LinkChat {...props} />,
      props: {
        options: [
          {
            text: "El teléfonno de atención al cliente es: 916.854.352",
            url:"",
            id: 1,
          },
        ],
      },
    } , 
    {
      //Problemas de vinculación
      widgetName: "OtrosLinks",
      widgetFunc: (props) => <LinkChat {...props} />,
      props: {
        options: [
          {
            text: "Reclamaciones",
            url:"",
            id: 1,
          },
          {
            text: "Alagos",
            url:"",
            id: 2,
          },
        ],
      },
    } , 
    {
      widgetName: "GuardianLinks",
      widgetFunc: (props) => <LinkChat {...props} />,
      props: {
        options: [
          {
            text: "Contactando....",
            id: 1,
          },
        ],
      },
    }
   
  ] ,
}

export default config