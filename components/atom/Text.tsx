import styled from "@emotion/styled";
import {
  DANGER,
  GREY,
  TEXT_GREY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY,
  WHITE,
} from "../../config/colors";

interface IText {
  fontWeight?: number;
  fontSize?: string;
  color?: string;
  cursor?: string;
}

const Text = styled.span`
  font-size: ${(props: IText) => props.fontSize || "14px"};
  line-height: 19.88px;
  color: ${({ color = TEXT_SECONDARY }: IText) =>
    color === "tertiary"
      ? TEXT_TERTIARY
      : color === "primary"
      ? TEXT_PRIMARY
      : color === "grey"
      ? TEXT_GREY
      : color === "danger"
      ? DANGER
      : color};
  font-weight: ${(props: IText) => props.fontWeight || 400};
  cursor: ${({ cursor }: IText) => cursor};
`;

export default Text;
