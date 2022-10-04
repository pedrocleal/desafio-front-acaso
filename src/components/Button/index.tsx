import Spinner from '../Spinner'
import { StyledButton } from './styles'

export interface IButtonProps {
  text: string,
  color: string,
  bgColor: string,
  onClick: any,
  disabled?: boolean | any,
  isLoading?: boolean
  // find a fix to onClick
}

export default function Button({ text, color, bgColor, onClick, disabled, isLoading }: IButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      onClick={onClick}
      text={text}
    >
      {isLoading ? <Spinner size={24} /> : text};
    </StyledButton>
  )
}
