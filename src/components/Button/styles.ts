import styled from "styled-components";
import { IButtonProps } from ".";

export const StyledButton = styled.button<IButtonProps>`
  width: 320px;
  height: 52px;
  border-radius: 30px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
`
