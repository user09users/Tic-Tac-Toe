import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  /*  let btnCaption = 'Edit'; */
  const [playerName, setPlayerName] = useState(initialName);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (value) => {
    setPlayerName(value);
  };
  let editiblePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editiblePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
    /* let btnCaption = "Save"; */
  }
  return (
    <li>
      <span className="player">
        {editiblePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
