import React from "react";

import "./Card.css";

export default function Card({
  currentItem,
  uncovered,
  onSelectProperty,
  selectedProperty,
  properties,
  playersTurn = false,
}) {
  function selectPropertyHandler(prop) {
    if (playersTurn) {
      onSelectProperty(prop);
    }
  }
  /*
Add some styling for the card component and its table to the Card.css file.
The Component should look like the screenshot picture in the public folder.
If the user selects a property from the card the property should be highlighted in yellow.
(Card.css)

*/
  const front = (
    <div className="card">
      <h1>{currentItem.name ? currentItem.name : "Unbekannt"}</h1>
      {
        <img
          alt={currentItem.name}
          src={`${process.env.PUBLIC_URL}/placeholder.png`}
          height="200"
          width="200"
        />
      }
      <table>
        <tbody>
          {Object.keys(properties).map((property) => {
            const itemProperty = properties[property];
            return (
              <tr
                key={property}
                className={selectedProperty === property ? "active" : ""}
                onClick={() => selectPropertyHandler(property)}
              >
                <td>{itemProperty.label}</td>
                <td>
                  {currentItem[property]}&nbsp;{itemProperty.unit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  const back = <div className="card back" />;

  return <div>{uncovered ? front : back}</div>;
}
