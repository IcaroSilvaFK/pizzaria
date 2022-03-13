import { FC } from "react";

import { ButtonConclused } from "../Buttons";

import styles from "./styles.module.scss";

export interface ICardNewOrderProps {
  creme: string | boolean;
  pizza: string | boolean;
  suco: string | boolean;
  id: string | number;
  onClick: () => void;
}

export const CardNEwOrder: FC<Partial<ICardNewOrderProps>> = ({
  creme,
  pizza,
  suco,
  id,
  onClick,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.headerCard}>
        <h3>Pedido:</h3> <strong>{id}</strong>
      </div>
      <div className={styles.bodyContent}>
        <h3>Conteudo do pedido :</h3>
        {pizza ? (
          <div className={styles.containerOrder}>
            <strong>Pizza :</strong>
            <p>{pizza}</p>
          </div>
        ) : (
          ""
        )}
        {creme ? (
          <div className={styles.containerOrder}>
            <strong>Creme :</strong>
            <p>{creme}</p>
          </div>
        ) : (
          ""
        )}
        {suco ? (
          <div className={styles.containerOrder}>
            <strong>Suco :</strong>
            <p>{suco}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.containerFooter}>
        <ButtonConclused onClick={onClick} />
      </div>
    </section>
  );
};
