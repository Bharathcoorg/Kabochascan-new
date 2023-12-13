import { ReactComponent as Kabocha } from "../../../components/icons/kabocha.svg";

const kabocha = {
  name: "Kabocha",
  icon: <Kabocha />,
  identity: "kusama",
  value: "kabocha",
  chain: "kusama",
  symbol: "KAB",
  decimals: 12,
  chainIcon: "kabocha",
  color: "#E6007A",
  colorSecondary: "rgba(230, 0, 122, 0.1)",
  buttonColor: "#E6007A",
  para: {
    relay: "Kusama",
    id: "2113",
  },
  modules: {
    multisig: true,
  },
  nodes: [{ name: "Jelliedowl", url: "wss://kabocha.jelliedowl.net" }],
  useOnChainBlockData: true,
};

export default kabocha;
