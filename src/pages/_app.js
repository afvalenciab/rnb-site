/* eslint-disable no-console */
import React from 'react';

import Head from 'next/head';
import App from 'next/app';

import 'typeface-metropolis';
import 'typeface-roboto-mono';
import '@typefaces-pack/typeface-inter';

if (process.browser && process.env.NODE_ENV === 'production') {
  console.log(
    `%c
Welcome to the official React Next Boilerplate site.

Help us improve this site. https://github.com/react-next-boilerplate/RNB-site/issues
`,
    'font-family:monospace;color:#1976d2;font-size:14px;'
  );
}

class Srr extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: Inter;
          }
        `}</style>
      </>
    );
  }
}

export default Srr;
