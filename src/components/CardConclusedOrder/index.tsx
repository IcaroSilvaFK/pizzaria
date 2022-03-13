import { FC } from "react";

import { ICardNewOrderProps } from "../CardNewOrder";
import { ButtonDeleteorder } from "../Buttons";

import styles from "./styles.module.scss";

type CardConclusedOrder = ICardNewOrderProps;

export const CardConclusedOrder: FC<Partial<CardConclusedOrder>> = ({
  creme,
  id,
  pizza,
  suco,
  onClick,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <h3>Pedido :</h3> <strong>{id}</strong>
      </div>
      <div className={styles.containerTitleBody}>
        <h3>Conteudo :</h3>
        <div className={styles.containerBody}>
          {pizza ? (
            <div className={styles.containerRow}>
              <strong>Pizza :</strong>
              <p>{pizza}</p>
            </div>
          ) : (
            ""
          )}
          {suco ? (
            <div className={styles.containerRow}>
              <strong>Suco :</strong>
              <p>{suco}</p>
            </div>
          ) : (
            ""
          )}
          {creme ? (
            <div className={styles.containerRow}>
              <strong>Creme :</strong>
              <p>{creme}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.containerButton}>
        <ButtonDeleteorder onClick={onClick} />
      </div>
    </section>
  );
};
