import { Button, SemanticCOLORS, SemanticSIZES } from "semantic-ui-react";
import React, { FC, MouseEvent } from "react";

import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";

type LinkButtonProps = {
  to: string;
  onClick?: any;
  color?: SemanticCOLORS;
  size?: SemanticSIZES;
};

const LinkButton: FC<RouteComponentProps & LinkButtonProps> = ({
  history,
  location,
  to,
  onClick,
  match,
  staticContext,
  color,
  size,
  ...rest
}) => (
  <Button
    {...rest}
    color={color || "grey"}
    size={size || "large"}
    onClick={(event: MouseEvent) => {
      onClick && onClick(event);
      history.push(to);
    }}
  />
);

export default withRouter(LinkButton);
