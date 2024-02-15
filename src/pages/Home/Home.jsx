import React from "react";
import Layout from "../../layout/Layout";
import "./Home.style.css";
import CardVisa from "../../components/Fragments/Card/CardVisa";
import CardTotalBalance from "../../components/Fragments/Card/CardTotalBalance";
import CardItemBuy from "../../components/Fragments/Card/CardItemBuy";
import CardChat from "../../components/Fragments/Card/CardChat";
import CardTransactions from "../../components/Fragments/Card/CardTransactions";
import CardAnalytics from "../../components/Fragments/Card/CardAnalytics";
import CardExpenses from "../../components/Fragments/Card/CardExpenses";
import CardSpending from "../../components/Fragments/Card/CardSpending";
import CardPremium from "../../components/Fragments/Card/CardPremium";

const Home = () => {
  return (
    <Layout>
      <section className="row home">
        {/* layout left */}
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

        {/* layout right */}
        <div className="col-lg-4 bg-white rounded-3 p-3">
          <CardExpenses />

          <CardSpending />

          <CardPremium />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
