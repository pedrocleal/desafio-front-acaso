import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react"
import { StyledInput } from './styles'

interface IInputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

export default function Input(props: IInputProps) {
  return (
    <StyledInput
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      type={props.type}
    >
      {props.children}
    </StyledInput>
  )
}
