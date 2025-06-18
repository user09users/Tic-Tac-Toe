import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onchangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onchangeName(symbol, playerName);
    }
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
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editiblePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
