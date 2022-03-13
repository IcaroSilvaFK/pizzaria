import type { NextPage } from "next";
import Head from "next/head";

import { usePopout } from "../../context/MenuContext/useMenu";
import { Header } from "../../components/Header";
import { MenuModal } from "../../components/MenuModal";
import { usePedidos } from "../../hooks/usePedidos";
import { CardNEwOrder } from "../../components/CardNewOrder";
import { api } from "../../services/axios";
import { toast } from "react-toastify";

interface IOrderProps {
  creme: string | boolean;
  pizza: string | boolean;
  suco: string | boolean;
  isConcluded: boolean;
  id: number | string;
}

const Pedidos: NextPage = () => {
  const { ispopout } = usePopout();
  const { data, isError, isFetching } = usePedidos();

  const handleConcluseOrder = async (id: number | string) => {
    const order = data?.filter((element) => {
      element.id === id;
      element.isConcluded = true;
      return element;
    });
    if (order) {
      const response = await api.post("/concluidos", order[0]);

      if (response.status === 201) {
        await api.delete(`/pedidos/${id}`);
        toast.success("Completado com sucesso ⚓");
        window.location.reload();
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Pedidos</title>
      </Head>
      <div>
        <Header />
        {ispopout ? <MenuModal /> : ""}
        <main>
          {data?.map((element) => {
            return (
              <CardNEwOrder
                key={element.id}
                creme={element.creme}
                suco={element.suco}
                pizza={element.pizza}
                id={element.id}
                onClick={() => handleConcluseOrder(element.id)}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Pedidos;
