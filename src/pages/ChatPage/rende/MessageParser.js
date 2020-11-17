class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("ayuda")) {
        this.actionProvider.greet();
      }
      
      if (lowerCaseMessage.includes("Seguridad")) {
        this.actionProvider.handleSeguridadLinks();
      }
      if (lowerCaseMessage.includes("Incidencias")) {
        this.actionProvider.handleIncidenciasLinks();
      }
      if (lowerCaseMessage.includes("Funcionamiento")) {
        this.actionProvider.handleFuncionamientoLinks();
      }
      if (lowerCaseMessage.includes("Llamanos")) {
        this.actionProvider.handleLlamanosLinks();
      }
      if (lowerCaseMessage.includes("Otros")) {
        this.actionProvider.handleOtrosLinks();
      }
      if (lowerCaseMessage.includes("Habla con tu Guardian")) {
        this.actionProvider.handleGuardianLinks();
      }
    }
}
  
export default MessageParser