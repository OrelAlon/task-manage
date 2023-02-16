import React from "react";
import styled from "styled-components";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { BiSave } from "react-icons/bi";

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
    color: ${({ isOpen }) => (isOpen ? "none" : "rgb(192, 83, 83)")};
  }
  div:nth-child(1) {
    display: flex;
    margin-right: 10px;
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
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
    <StyledCard ref={innerRef} draggable isOpen={open}>
      <div>
        <div onClick={handleToggleOpen}>
          {" "}
          {open ? (
            <MdOutlineCheckBoxOutlineBlank size={30} />
          ) : (
            <MdOutlineCheckBox size={30} />
          )}
        </div>
        {editing ? (
          <input type='text' value={inputValue} onChange={handleInputChange} />
        ) : (
          <div onClick={handleTaskClick}>{name}</div>
        )}
      </div>
      <div>
        <div onClick={editing ? handleUpdate : handleTaskClick}>
          {editing ? <BiSave size={30} /> : <FiEdit3 color='black' size={30} />}
        </div>

        <div onClick={handleDelete}>
          <MdOutlineDeleteForever color='black' size={30} />
        </div>
      </div>
    </StyledCard>
  );
}
