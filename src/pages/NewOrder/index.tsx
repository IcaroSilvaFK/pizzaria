import type { NextPage } from "next";
import Head from "next/head";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import { Header } from "../../components/Header";
import { usePopout } from "../../context/MenuContext/useMenu";
import { MenuModal } from "../../components/MenuModal";
import { Input } from "../../components/Input";
import { ButtonSubmit } from "../../components/Buttons";

import styles from "./styles.module.scss";
import { api } from "../../services/axios";

interface ISubmitProps {
  pizza: string;
  creme: string;
  suco: string;
}

const NewOrder: NextPage = () => {
  const { ispopout } = usePopout();
  const props = useForm<ISubmitProps>({
    defaultValues: {
      creme: "",
      pizza: "",
      suco: "",
    },
  });

  const onSubmit: SubmitHandler<Partial<ISubmitProps>> = async ({
    creme,
    pizza,
    suco,
  }) => {
    const order = {
      id: uuid(),
      creme: creme ? creme : false,
      pizza: pizza ? pizza : false,
      suco: suco ? suco : false,
      isConcluded: false,
    };
    const response = await api.post("/pedidos", order);

    if (response.status === 201) {
      toast("Pedido agendado com sucesso ⚓", {
        theme: "light",
        draggable: true,
      });
      props.reset();
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Novo Pedido |</title>
      </Head>
      <div>
        <Header />
        {ispopout ? <MenuModal /> : ""}
        <main className={styles.containerContent}>
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
              <Input
                label="Pizza"
                placeholder="ex : calabresa com queijo"
                name="pizza"
                type="text"
              />
              <Input
                label="Suco"
                placeholder="ex : laranja s/açucar"
                name="suco"
                type="text"
              />
              <Input
                label="Creme"
                placeholder="ex : creme de morango"
                name="creme"
                type="text"
              />
              <ButtonSubmit text="Enviar" />
            </form>
          </FormProvider>
        </main>
      </div>
    </div>
  );
};

export default NewOrder;
