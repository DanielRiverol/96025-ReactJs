import SecretMessage from "../components/SecretMessage";
import withToggle from "../hoc/withToggle";

const MensajeFuncional = withToggle(SecretMessage);
function HocEjemplo() {
  return <MensajeFuncional />;
}

export default HocEjemplo;
