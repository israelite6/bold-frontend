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
}

const Text = styled.div`
  font-size: ${(props: IText) => props.fontSize || "14px"};
  line-height: 19.88px;
  color: ${(props) =>
    props.color === "tertiary"
      ? TEXT_TERTIARY
      : props.color === "primary"
      ? TEXT_PRIMARY
      : props.color === "grey"
      ? TEXT_GREY
      : props.color === "danger"
      ? DANGER
      : TEXT_SECONDARY};
  font-weight: ${(props: IText) => props.fontWeight || 400};
`;

export default Text;
