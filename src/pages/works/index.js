import React from "react";
import Layout from "@theme/Layout";
import PageHeader from "@site/src/components/PageHeader";
import HomepageWorklist from "@site/src/components/Worklist";

const Works = () => {
  return (
    <Layout>
      <div>
        <PageHeader />
        <HomepageWorklist />
      </div>
    </Layout>
  );
};

export default Works;
