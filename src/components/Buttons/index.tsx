import { FC } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

import styles from "./styles.module.scss";

export const ButtonSubmit: FC<{ text: string }> = ({ text }) => {
  return (
    <button type="submit" className={styles.submit}>
      {text}
    </button>
  );
};

interface IButtonConClusedProps {
  onClick?: () => void;
}

export const ButtonConclused: FC<IButtonConClusedProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.ButtonConclused}>
      marcar como concluido <BsCheckLg />
    </button>
  );
};

export const ButtonDeleteorder: FC<IButtonConClusedProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.ButtonDeleteorder}>
      Deletar Pedido <MdDeleteForever />
    </button>
  );
};
