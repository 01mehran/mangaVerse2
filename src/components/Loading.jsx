// Icons;
import { Riple } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="hidden dark:block">
        <Riple color="#a855f7" size="medium" text="" textColor="" />
      </span>
      <span className="block dark:hidden">
        <Riple color="#6366f1" size="medium" text="" textColor="" />
      </span>
    </div>
  );
}
