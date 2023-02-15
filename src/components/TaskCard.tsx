import React from "react";
import styled from "styled-components";
import { Trash, Pencil } from "tabler-icons-react";

type TaskCardProps = {
  name: string;
  id: string;
  open?: boolean;
  index: number;
  isOpen?: boolean;
  innerRef?: React.RefObject<HTMLDivElement>;
  onUpdate: (id: string, value: string) => void;
  onDelete: (id: string) => void;
  onToggleOpen: (id: string) => void;
};

interface Props {
  isOpen?: boolean;
}
const StyledCard = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  outline: none;
  border-bottom: 1px dotted #666;
  overflow: hidden;
  font-size: 1.5rem;
  width: 100%;
  margin-right: 10px;
  div:nth-child(2) {
    text-decoration: ${({ isOpen }) => (isOpen ? "none" : "line-through")};
  }
`;

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
    <StyledCard
      // className={open ? "task-item open" : "task-item close"}
      ref={innerRef}
      draggable
      isOpen={open}
    >
      <div onClick={handleToggleOpen}> {open ? "🔲" : "✅"}</div>
      {editing ? (
        <input type='text' value={inputValue} onChange={handleInputChange} />
      ) : (
        <div onClick={handleTaskClick}>{name}</div>
      )}
      <div
        className='update'
        onClick={editing ? handleUpdate : handleTaskClick}
      >
        {editing ? "💾" : <Pencil size={32} />}
      </div>

      <div className='delete' onClick={handleDelete}>
        <Trash size={32} />
      </div>
    </StyledCard>
  );
}
