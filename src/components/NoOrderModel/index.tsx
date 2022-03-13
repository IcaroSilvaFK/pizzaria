import { FC } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

import styles from "./styles.module.scss";

export const NoOrderModal: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <HiOutlineEmojiSad />
        <h3>Ainda não temos pedidos concluidos</h3>
      </div>
    </div>
  );
};
