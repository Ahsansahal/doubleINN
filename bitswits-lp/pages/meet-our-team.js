import Head from "next/head";
import React from "react";
import Meetteam from '@/components/meetourteamlp/meetourteam'

//const meetteam = React.lazy(() => import("@/components/meetourteamlp/meetourteamlp"))

const meetourteamlp = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>
      <Meetteam/>
    </>
  )
}

export default meetourteamlp
