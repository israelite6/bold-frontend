import styled from "@emotion/styled";
import { LIGHT_PRIMARY } from "../../config/colors";
import AvatarSvg from "./../../icons/avatar.svg";

interface IAvatar {
  size?: string;
  className?: string;
}

export default function Avatar(props: IAvatar) {
  return (
    <AvatarWrapper {...props}>
      <AvatarSvg />
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div`
  width: ${(props: IAvatar) => (props.size === "small" ? "28px" : "36px")};
  height: ${(props: IAvatar) => (props.size === "small" ? "28px" : "36px")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${LIGHT_PRIMARY};
  border-radius: ${(props: IAvatar) =>
    props.size === "small" ? "14px" : "18px"};
`;
