import "./App.css";
import Directory from "./Directory";

const files = [
  {
    type: "directory",
    name: "directory-1",
    contents: [
      { type: "file", name: "file-1.js" },
      { type: "file", name: "file-2.js" },
    ],
  },
  {
    type: "directory",
    name: "directory-2",
    contents: [
      { type: "file", name: "file-3.js" },
      {
        type: "directory",
        name: "directory-3",
        contents: [
          { type: "file", name: "file-4.js" },
          {
            type: "directory",
            name: "directory-4",
            contents: [{ type: "file", name: "file-5.js" }],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="test">
      {files.map((file) => (
        <Directory file={file} />
      ))}
    </div>
  );
}

export default App;
