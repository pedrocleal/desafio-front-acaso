import { ReactNode } from "react"
import { Container } from "./styles"

interface IFormGroupProps {
  children: ReactNode,
  errorMsg?: string
}

export default function FormGroup(props: IFormGroupProps) {
  return (
    <Container>
      {props.children}
      <span>{props.errorMsg}</span>
    </Container>
  )
}
