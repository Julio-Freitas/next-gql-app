import { InputHTMLAttributes } from 'react';
import * as Styled from './styled';
type InputProps = {
  name: string;
  type: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ name, label, type, ...props }) => {
  return (
    <Styled.ContainerInput>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input id={name} {...props} />
    </Styled.ContainerInput>
  );
};
export default Input;
