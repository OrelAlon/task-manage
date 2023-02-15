import React from "react";

type TaskCardProps = {
  name: string;
  id: string;
  open: boolean;
  index: number;
  innerRef?: React.RefObject<HTMLDivElement>;
  onUpdate: (id: string, value: string) => void;
  onDelete: (id: string) => void;
  onToggleOpen: (id: string) => void;
};

export default function TaskCard({
  name,
  id,
  open,
  innerRef,
  onUpdate,
  onDelete,
  onToggleOpen,
}: TaskCardProps) {
  const [editing, setEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(name);

  const handleUpdate = () => {
    onUpdate(id, inputValue);
    setEditing(false);
  };

  const handleDelete = () => onDelete(id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleTaskClick = () => {
    if (open) {
      setEditing(true);
    }
  };

  const handleToggleOpen = () => onToggleOpen(id);

  return (
    <div
      className={open ? "task-item open" : "task-item close"}
      ref={innerRef}
      draggable
    >
      <div className='toggle' onClick={handleToggleOpen}>
        {open ? "close" : "open"}
      </div>
      {editing ? (
        <input type='text' value={inputValue} onChange={handleInputChange} />
      ) : (
        <div className='name' onClick={handleTaskClick}>
          {name}
        </div>
      )}
      <div
        className='update'
        onClick={editing ? handleUpdate : handleTaskClick}
      >
        {editing ? "save " : "edit"}
      </div>
      <div className='update'></div>

      <div className='delete' onClick={handleDelete}>
        X
      </div>
    </div>
  );
}
