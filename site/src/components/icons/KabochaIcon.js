import { ReactComponent as Kabocha } from "./kabocha.svg";
import { ReactComponent as KabochaDark } from "./kabocha.svg";
import { useIsDark } from "../../utils/hooks";
import { useMemo } from "react";

export default function KabochaIcon(props) {
  const isDark = useIsDark();
  const Icon = useMemo(() => (isDark ? KabochaDark : Kabocha), [isDark]);
  return <Icon {...props} />;
}