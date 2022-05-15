import React from 'react'
import Head from 'next/head'

const MetaData = ({title}) => {
    return (
        <Head>
            <title>{`CyberVault ${title && '| ' +title}`}</title>
            <meta name="description" content="One stop Super Password manager" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MetaData