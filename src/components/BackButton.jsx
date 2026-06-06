// React-router-dom
import { useNavigate } from "react-router-dom";

// Icons;
import { MoveLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-indigo-400 hover:text-primary dark:text-text-muted-dark dark:hover:text-primary-dark mb-8 cursor-pointer transition hover:-translate-x-px"
    >
      <MoveLeft size={36} />
    </button>
  );
}
