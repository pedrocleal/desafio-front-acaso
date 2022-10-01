import { MouseEvent } from 'react'
import { StyledButton } from './styles'

export interface IButtonProps {
  text: string,
  color: string,
  bgColor: string,
  onClick: any,
  disabled?: boolean | any,
  // find a fix to onClick
}

export default function Button({ text, color, bgColor, onClick, disabled }: IButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      onClick={onClick}
      text={text}
    >
      {text}
    </StyledButton>
  )
}
