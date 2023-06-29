import { ToggleProvider } from "@/context/ToggleContext";

function layout({ children }) {
  return <ToggleProvider>{children}</ToggleProvider>;
}

export default layout;
