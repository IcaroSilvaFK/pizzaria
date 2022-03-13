import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../../components/Header";
import { MenuModal } from "../../components/MenuModal";
import { usePopout } from "../../context/MenuContext/useMenu";
import { useOrderConclused } from "../../hooks/useOrderConclused";
import { NoOrderModal } from "../../components/NoOrderModel";

import styles from "./styles.module.scss";
import { CardConclusedOrder } from "../../components/CardConclusedOrder";
import { api } from "../../services/axios";
import { toast } from "react-toastify";

const Menu: NextPage = () => {
  const { ispopout } = usePopout();
  const { data, isError, isFetching } = useOrderConclused();

  const handleRemoveOrder = async (id: number) => {
    const remove = await api.delete(`concluidos/${id}`);
    if (remove.status === 200) toast.success("Pedido removido");
  };

  console.log(isFetching);
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu |</title>
      </Head>
      <main>
        <Header />
        {ispopout ? <MenuModal /> : ""}
        <section>
          {data?.length ? (
            data.map((element) => (
              <CardConclusedOrder
                key={element.id}
                creme={element.creme}
                pizza={element.pizza}
                suco={element.suco}
                onClick={() => handleRemoveOrder(element.id)}
                id={element.id}
              />
            ))
          ) : (
            <NoOrderModal />
          )}
        </section>
      </main>
    </div>
  );
};

export default Menu;
