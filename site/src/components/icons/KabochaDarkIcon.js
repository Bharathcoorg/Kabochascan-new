import { ReactComponent as KabochaDark } from "./kabocha.svg";
import { useIsDark } from "../../utils/hooks";
import { useMemo } from "react";

export default function KabochaDarkIcon(props) {
  const isDark = useIsDark();
  const Icon = useMemo(() => (KabochaDark), [isDark]);
  return <Icon {...props} />;
}