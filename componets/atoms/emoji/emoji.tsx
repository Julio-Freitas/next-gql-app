import * as Styled from './style';

type EmojilProps = {
  emoji: string;
};
const Emoji = ({ emoji }: EmojilProps) => {
  return <Styled.Emoji>{emoji}</Styled.Emoji>;
};

export default Emoji;
