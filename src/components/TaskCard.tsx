import React from "react";

type TaskCardProps = {
  name: string;
  id: string;
  open: boolean;
  index: number;
  innerRef?: React.RefObject<HTMLDivElement>;
};

export default function TaskCard({ name, id, open, innerRef }: TaskCardProps) {
  return (
    <div
      className={open ? "task-item open" : "task-item close"}
      ref={innerRef}
      draggable
    >
      {name}
      <div className='update'></div>

      <div className='delete'>X</div>
    </div>
  );
}
