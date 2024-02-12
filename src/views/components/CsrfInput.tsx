import React from "react";

type Props = {
  token: string;
};

const CsrfInput = (props: Props) => {
  return <input type="hidden" value={props.token} name="_csrf" />;
};

export default CsrfInput;
