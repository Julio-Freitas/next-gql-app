import { useRouter } from 'next/router';
import Link from 'next/link';
import { Country } from '../api/types/types';
import CoutryGQL from '../graphql/country/query.gql';
import { useQuery } from '@apollo/client';
import Card from '../components/molecule/card';

import * as Styled from '../styles/styled';

type CountyType = {
  country: Country;
};
const CountrySingle = () => {
  const router = useRouter();
  const { country } = router.query;
  const { loading, data, error } = useQuery<CountyType>(CoutryGQL, {
    variables: {
      code: `${country}`.toLocaleUpperCase(),
    },
  });

  const RenderContent = (result, loading, error) => {
    if (loading && result === undefined) return <h1>Carregando...</h1>;

    if (error) return <h1>Algo de errado Acontenceu</h1>;

    if (!result.country) return <h1>Pais não encontrado...</h1>;

    const { name, capital, emoji } = result.country;

    return <Card name={name} capital={capital} emoji={emoji} />;
  };

  return (
    <Styled.CardFlipContainer Single>
      <h1>Country</h1>
      {RenderContent(data, loading, error)}
      <Link href="/">
        <a>Home</a>
      </Link>
    </Styled.CardFlipContainer>
  );
};

export default CountrySingle;
