import styled, { css } from "styled-components";
import { IInputProps } from ".";

export const StyledInput = styled.input<IInputProps>`
  width: 100%;
  padding: 16px 22px;
  outline: none;
  border: none;
  background: #1E1F2F;
  border: 2px solid #1E1F2F;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease-in;

  ${({ error }) => error && css`
    border-color: #E93F78;
  `}

  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`
