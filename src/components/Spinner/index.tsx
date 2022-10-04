import { StyledSpinner } from './styles';

export interface ISpinner {
  size: number
}

export default function Spinner({ size }: ISpinner) {
  return <StyledSpinner size={size} />;
}
