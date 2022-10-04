import styled from "styled-components";
import { IButtonProps } from ".";

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 52px;
  border-radius: 30px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
  transition: all 0.3s ease-in;

  &:hover {
    background: #dddddd;
  }

  &:disabled {
    background: #717177;
    cursor: default;
  }
`
