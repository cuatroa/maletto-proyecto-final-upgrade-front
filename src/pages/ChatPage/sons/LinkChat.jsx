import React from "react";

import "./LinkChat.scss";

const LinkChat = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="linkItem">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="linkUrl"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link">{linkMarkup}</ul>;
};

export default LinkChat;