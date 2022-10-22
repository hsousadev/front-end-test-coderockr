import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

import { Container } from "./styles";

const Input = (props: InputProps) => {
  return (
    <Container>
      <input {...props} />
    </Container>
  );
};

export default Input;
