import React, { useState } from "react";
import { useEffect } from "react";

function Colors() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <nav className="flex justify-between p-2 m-2">
        <button
          onClick={() => setColor("Yellow")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("Green")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Green
        </button>
        <button
          onClick={() => setColor("Blue")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("Aqua")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Aqua
        </button>
        <button
          onClick={() => setColor("Gray")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Gray
        </button>
        <button
          onClick={() => setColor("Orange")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("white")}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Reset
        </button>
      </nav>
    </div>
  );
}

export default Colors;
