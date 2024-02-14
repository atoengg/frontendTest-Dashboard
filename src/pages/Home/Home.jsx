import React from "react";
import Layout from "../../layout/Layout";
import "./Home.style.css";
import CardVisa from "../../components/Fragments/Card/CardVisa";
import CardTotalBalance from "../../components/Fragments/Card/CardTotalBalance";
import CardItemBuy from "../../components/Fragments/Card/CardItemBuy";
import CardChat from "../../components/Fragments/Card/CardChat";
import { BsThreeDotsVertical } from "react-icons/bs";
import { dataListTransaction } from "../../components/DataComponents/DataComponents";

import CardTransactions from "../../components/Fragments/Card/CardTransactions";
import CardAnalytics from "../../components/Fragments/Card/CardAnalytics";

const Home = () => {
  return (
    <Layout>
      <section className="row home">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch">
              <CardTotalBalance />
            </div>
            <div className="col-lg-6">
              <CardVisa />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 d-flex align-items-stretch">
              <CardItemBuy />
            </div>
            <div className="col-lg-6">
              <CardChat />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-7">
              <CardTransactions />
            </div>
            <div className="col-lg-5">
              <CardAnalytics />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <p>kanan</p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
