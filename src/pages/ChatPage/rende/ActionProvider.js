class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("De acuerdo, vamos a gestionar su incidencia. 🙂") //vincularlo con el nombre de usuario
      this.updateChatbotState(greetingMessage)
    }

    handleSeguridadLinks = () => {
      const message = this.createChatBotMessage(
        "De acuerdo, veámos si alguna de las siguientes opciones resuelve su duda:" ,
        {
          widget: "SeguridadLinks",
        } 
      );
      this.updateChatbotState(message);
    };

    handleIncidenciasLinks = () => {
      const message = this.createChatBotMessage(
        "De acuerdo, señale si tiene alguno de los siguientes problemas.",
        {
          widget: "IncidenciasLinks",
        } 
      );
      this.updateChatbotState(message);
    };

    handleFuncionamientoLinks = () => {
      const message = this.createChatBotMessage(
        "De acuerdo, señale si tiene alguno de los siguientes problemas.",
        {
          widget: "FuncionamientoLinks",
        } 
      );
      this.updateChatbotState(message);
    };
    
    handleLlamanosLinks= () => {
      const message = this.createChatBotMessage(
        "Perfecto, esperamos su llamada.",
        {
          widget: "LlamanosLinks",
        } 
      );
      this.updateChatbotState(message);
    };

    handleOtrosLinks= () => {
      const message = this.createChatBotMessage(
        "De acuerdo, detalla brevemente su problema para poder ayudarle.",
        {
          widget: "OtrosLinks",
        } 
      );
      this.updateChatbotState(message);
    };

    handleGuardianLinks= () => {
      const message = this.createChatBotMessage(
        "De acuerdo, te conectamos con tu guardian.",
        {
          widget: "GuardianLinks",
        } 
      );
      this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
}
  
export default ActionProvider