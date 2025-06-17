import Head from "next/head";
import React from "react";
// Components
const Appmaking = React.lazy(() => import("@/components/Appmaking"));
const Homeslider = React.lazy(() => import("@/components/Homeslider"));
const ProjectProcesshome = React.lazy(() => import("@/components/ProjectProcesshome"));
const Creative = React.lazy(() => import("@/components/Creative"));
const Expertapphome = React.lazy(() => import("@/components/Expertapphome"));
const Thrthy = React.lazy(() => import("@/components/Thrthy"));
const Everyone = React.lazy(() => import("@/components/Everyone"));
const Testimonailslider = React.lazy(() => import("@/components/Testimonailslider"));
const Startaproject = React.lazy(() => import("@/components/Startaproject"));
const Formnewlpnewhome = React.lazy(() => import("@/components/Formnewlpnewhome"));
const SupersaleStiky = React.lazy(() => import("@/components/SupersaleStiky"));


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Appmaking />
      <Homeslider />
      <ProjectProcesshome processclass="process" />
      <Creative />
      <Expertapphome expertapp="expertapp" />
      <Thrthy />
      <Everyone />
      <Testimonailslider />
      <Startaproject />
      <Formnewlpnewhome />
      <SupersaleStiky />
    </>
  );
}
