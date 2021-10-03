import Head from 'next/head';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Country } from '../api/types/types';
import QUERY_COUNTRIES from '../graphql/countries/CountriesQuery.gql';
import Card from '../componets/molecule/card';
import Pagination from '../componets/molecule/pagination';
import { InitialPage } from '../componets/molecule/pagination/pagintation';
import * as Styeld from '../styles/styled';

type Countries = {
  countries: Country[];
};

import styles from '../styles/Home.module.css';

export default function Home() {
  const { data, loading, error } = useQuery<Countries>(QUERY_COUNTRIES);
  const [updateList, setUpdateList] = useState({
    start: 0,
    end: 5,
  });

  if (loading)
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );

  if (error) {
    return <p>:( an error happened</p>;
  }

  const _handleUpdatelist = (control: InitialPage) => {
    control = {
      ...control,
      page: control.page - 1,
    };
    const start = control.page * control.perPage;
    const end = start + control.perPage;

    setUpdateList({
      start,
      end,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      <Styeld.CardFlipContainer>
        {data.countries
          .map((country) => (
            <Card
              key={country.code}
              name={country.name}
              capital={country.capital}
              emoji={country.emoji}
            />
          ))
          .slice(updateList.start, updateList.end)}
      </Styeld.CardFlipContainer>

      <Pagination
        totalPagination={data.countries.length}
        updateList={(control) => _handleUpdatelist(control)}
        maxVisibleButton={5}
      />
    </div>
  );
}
