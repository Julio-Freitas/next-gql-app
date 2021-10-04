import { useState } from 'react';
import Link from 'next/link';
import Input from '@/atoms/input';

import * as Styled from './styled';

const Filter = () => {
  const [country, setCountry] = useState('');
  return (
    <Styled.FilterContainer>
      <Input
        name="name"
        label="Pesquisar por um pais"
        placeholder="Digite o code de um pais"
        type="search"
        onChange={({ target }) => setCountry(target.value)}
      />
      <Styled.LinkFilter Disabled={country ? false : true}>
        <Link passHref href={country ? '/[country]' : '/'} as={`/${country}`}>
          <a>Pesquisar</a>
        </Link>
      </Styled.LinkFilter>
    </Styled.FilterContainer>
  );
};

export default Filter;
