"use client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Excalidraw theme="dark" />
    </div>
  );
};
export default ExcalidrawWrapper;
