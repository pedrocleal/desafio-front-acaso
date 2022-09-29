import { MouseEvent } from 'react'
import { StyledButton } from './styles'

interface IButtonProps {
  text: string,
  color: string,
  bgColor: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

export default function Button(props: IButtonProps) {
  return (
    <StyledButton
      color={props.color}
      bgColor={props.bgColor}
    >
      {props.text}
    </StyledButton>
  )
}
