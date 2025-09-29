import React from "react";

export default function goo() {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-baseline space-x-2">
        <h1 className="text-2xl font-bold text-gray-800">Widgets</h1>
        <span className="text-sm text-gray-500">Preview.page</span>
      </div>
      <div className="flex items-center space-x-1 text-sm text-gray-500">
        <span className="w-2 h-2 border border-gray-500"></span>
        <span>Home &gt; Widgets</span>
      </div>
    </div>
  );
}
