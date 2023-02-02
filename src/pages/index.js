import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import PageHeader from "@site/src/components/PageHeader";
import HomepageNoteLists from "@site/src/components/HomepageNoteLists";
import HomepageWorklist from "@site/src/components/Worklist";

import styles from "./index.module.css";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//       <div className="tailwind">
//         <div className="container mx-auto text-center py-24">
//           <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
//           <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

//           <div className="py-10">
//             <Link
//               className="bg-white rounded-md text-gray-500 px-4 py-2"
//               to="/docs/intro"
//             >
//               Docusaurus Tutorial - 5min ⏱️
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <PageHeader bg={"random"}>
        <div className="tailwind">
          <div className=" max-w-[450px]">
            <h1 className=" font-extrabold text-4xl z-1 mb-3 text-gray-500">
              Hello!
            </h1>
            <p className="font-extrabold text-xl">
              我是旼修，一位前端工程師，
              <span className="text-gray-500">前</span>
              平面設計師。
              <br />
              這裡是我分享學習筆記和過往專案的地方
            </p>
          </div>
        </div>
      </PageHeader>
      <main>
        <HomepageNoteLists />
        <HomepageWorklist displayTitle={true} visibleNum={6} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
