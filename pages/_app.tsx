import {Global} from "@emotion/react";
import React, { ReactElement } from 'react';
import type { AppProps } from "next/app";
import Layout from "../../class/src/components/layout";
import ApolloSetting from "../../class/src/components/commons/apollo/inedx";
import { globalStyles } from "../../class/src/commons/styles/globalStyles";


export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <ApolloSetting>
        <>
        <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
      </ApolloSetting>
    </div>
  );
}

