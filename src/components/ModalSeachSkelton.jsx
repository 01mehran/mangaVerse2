import React from "react";

export default function ModalSeachSkelton() {
  return [1, 2, 3, 4, 5].map((item) => (
    <div
      key={item}
      className="flex animate-pulse items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/* Image skeleton */}
      <div className="h-14 w-10 rounded bg-gray-300 dark:bg-gray-700" />
      {/* Text skeleton */}
      <div className="flex flex-col gap-2">
        <div className="h-3 w-32 rounded bg-gray-300 dark:bg-gray-700" />
        <div className="h-2 w-20 rounded bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  ));
}
