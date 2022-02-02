import { useState } from "react";
export const Accordin = ({ title, content }) => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <div
        className="flex items-center border-b py-4"
        onClick={() => setActive(!isActive)}
      >
        <span className="flex-1">{title}</span>
        {isActive ? (
          <i className="text-bookmark-purple fas fa-chevron-up"></i>
        ) : (
          <i className="text-bookmark-purple fas fa-chevron-down"></i>
        )}
      </div>
      {isActive ? (
        <div className="flex items-center border-b py-4 overflow-hidden transition-all duration-200">
          <span className="flex-1 ">{content}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
