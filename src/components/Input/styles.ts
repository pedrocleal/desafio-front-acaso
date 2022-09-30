import styled, { css } from "styled-components";
import { IInputProps } from ".";

export const StyledInput = styled.input<IInputProps>`
  width: 100%;
  padding: 16px 22px;
  outline: none;
  border: none;
  background: #1E1F2F;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`
