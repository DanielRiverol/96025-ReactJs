import { useState } from "react";

function withToggle(Component) {
  return function WrapperComponent(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);
    return <Component {...props} isVisible={isVisible} toggle={toggle} />;
  };
}

export default withToggle;
