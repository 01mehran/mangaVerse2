// React Hooks;
import { useEffect } from "react";

// React-router-dom;
import { useNavigation } from "react-router-dom";

export default function LockScrollOnLoading() {
  const navigation = useNavigation();

  useEffect(() => {
    document.body.style.overflow =
      navigation.state === "loading" ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navigation.state]);

  return null;
}
