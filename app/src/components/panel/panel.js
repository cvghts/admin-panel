import React from "react";

const Panel = () => {
    return (
        <div className="panel">
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-open">Відкрити</button>
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-save">Опублікувати</button>
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-meta">Редагувати META</button>
            <button className="uk-button uk-button-default uk-margin-small-right" uk-toggle="target: #modal-backup">Відновити</button>
            <button className="uk-button uk-button-danger" uk-toggle="target: #modal-logout">Вихід</button>
        </div>
    )
};

export default Panel