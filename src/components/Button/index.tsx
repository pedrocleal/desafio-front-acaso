import { MouseEvent } from 'react'
import { StyledButton } from './styles'

export interface IButtonProps {
  text: string,
  color: string,
  bgColor: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

export default function Button({ text, color, bgColor, onClick }: IButtonProps) {
  return (
    <StyledButton
      color={color}
      bgColor={bgColor}
      onClick={onClick}
      text={text}
    >
      {text}
    </StyledButton>
  )
}
