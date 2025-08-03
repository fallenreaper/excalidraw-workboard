"use client";
import { Excalidraw } from "@excalidraw/excalidraw";
import dynamic from "next/dynamic";

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  // async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  async () => (await import("./excalidraw-wrapper")).default,
  {
    ssr: false,
  },
);

export default function App() {
  return (
    <div className="h-screen w-screen">
      <ExcalidrawWrapper />;
    </div>
  );
}
