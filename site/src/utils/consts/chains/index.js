import litentry from "./litentry";
import statemine from "./statemine";
import statemint from "./statemint";
import westmint from "./westmint";
import litmus from "./litmus";
import westendCollectives from "./westendCollectives";
import collectives from "./collectives";
import kusama from "./kusama";
import kabocha from "./kabocha";
import polkadot from "./polkadot";

const chains = {
  kusama,
  kabocha,
  polkadot,
  litentry,
  litmus,
  statemine,
  statemint,
  westmint,
  "westend-collectives": westendCollectives,
  collectives,
};

export default chains;
