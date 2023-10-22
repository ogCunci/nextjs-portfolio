import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-[#163f99]"
    : "text-[#adb7be] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl ${buttonStyle}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
