import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react"
import { StyledInput } from './styles'

export interface IInputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  error?: boolean;
}

export default function Input({ type, placeholder, value, onChange, children, error}: IInputProps) {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      error={error}
    >
      {children}
    </StyledInput>
  )
}
