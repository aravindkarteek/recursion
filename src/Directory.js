import React from "react";

const Directory = ({ file }) => {
  const { name, contents } = file;
  return (
    <>
      <div className="name">{name}</div>
      <div className="content">
        {contents && contents.length
          ? contents.map((item) => <Directory file={item} />)
          : null}
      </div>
    </>
  );
};

export default Directory;
