import React from "react";
import "./OptionsChat.scss";

const OptionsChat = (props) => {
    const options = [
        {
            text: "Seguridad",
            handler: props.actionProvider.handleSeguridadLinks,
            id: 1,
        },
        {
            text: "Incidencias",
            handler: props.actionProvider.handleIncidenciasLinks,
            id: 2,
        },
        {
            text: "Funcionamiento",
            handler: props.actionProvider.handleFuncionamientoLinks,
            id: 3,
        },
        {
            text: "Llámanos",
            handler: props.actionProvider.handleLlamanosLinks,
            id: 5,
        },
        {
            text: "Otros",
            handler: props.actionProvider.handleOtrosLinks,
            id: 6,
        },
        {
            text: "Guardian",
            handler: props.actionProvider.handleGuardianLinks,
            id: 7,
        },

    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="optionBtn"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="optionsContainer">{optionsMarkup}</div>;

};

export default OptionsChat;