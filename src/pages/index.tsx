import type { NextPage } from "next";
import Head from "next/head";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Input";
import { ButtonSubmit } from "../components/Buttons";
import { schema } from "../validations/login";
import styles from "./styles/Home.module.scss";

interface IFormProps {
  name: string;
  password: string;
}

const Home: NextPage = ({}) => {
  const props = useForm<IFormProps>({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    props.reset();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.containerContent}>
        <h1>Nome Empresa</h1>
        <FormProvider {...props}>
          <main className={styles.containerForm}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
              <div className={styles.containerFormColumn}>
                <Input
                  name="name"
                  placeholder="nome"
                  type="text"
                  label="Digite seu nome"
                />
              </div>
              <div className={styles.containerFormColumn}>
                <Input
                  name="password"
                  placeholder="password"
                  type="text"
                  label="Digite sua senha"
                />
              </div>
              <ButtonSubmit text="Logar" />
            </form>
          </main>
        </FormProvider>
      </div>
    </div>
  );
};

export default Home;
