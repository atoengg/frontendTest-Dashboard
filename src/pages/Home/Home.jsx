import React from "react";
import Layout from "../../layout/Layout";
import "./Home.style.css";
import CardVisa from "../../components/Fragments/Card/CardVisa";
import CardTotalBalance from "../../components/Fragments/Card/CardTotalBalance";
import ButtonAddItem from "../../components/Elements/Button/ButtonAddItem";
import { BsEmojiSmile, BsPlus } from "react-icons/bs";
import CheckboxItem from "../../components/Elements/CheckboxItem/CheckboxItem";
import { iconDocChat, iconPersonChat2, iconProfileUser } from "../../../image";
import ButtonSendChat from "../../components/Elements/Button/ButtonSendChat";
import CardItemBuy from "../../components/Fragments/Card/CardItemBuy";
import CardChat from "../../components/Fragments/Card/CardChat";

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

          <div className="row">
            <div className="col-lg-6">
              <p>total balance</p>
            </div>
            <div className="col-lg-6">
              <p>visa</p>
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
