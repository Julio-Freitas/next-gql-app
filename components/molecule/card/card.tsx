import Label from '../../atoms/label';
import Emoji from '../../atoms/emoji/emoji';

import * as Styled from './style';
type CardProps = {
  name: string;
  capital: string;
  emoji: string;
};

const Card = ({ name, capital, emoji }: CardProps) => {
  return (
    <Styled.Container>
      <Styled.ConteinerInner>
        <Styled.CardFront>
          <Emoji emoji={emoji} />
        </Styled.CardFront>

        <Styled.CardBack>
          <Styled.WrapperInfo>
            <Label text="name:" fontWeight="bold" />
            <Label text={name} fontWeight="bold" />
          </Styled.WrapperInfo>
          <Styled.WrapperInfo>
            <Label text="Capital:" fontWeight="bold" />
            <Label text={capital} fontWeight="bold" />
          </Styled.WrapperInfo>
        </Styled.CardBack>
      </Styled.ConteinerInner>
    </Styled.Container>
  );
};

export default Card;
