import * as Styled from './style';
type FontWeight = 'bold';

type LabelProps = {
  text: string;
  fontWeight: FontWeight;
};
const Label = ({ text, fontWeight }: LabelProps) => {
  return <Styled.Label fontWeight={fontWeight}>{text}</Styled.Label>;
};

export default Label;
