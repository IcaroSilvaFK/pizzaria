import { FC } from "react";

import { BiMenu } from "react-icons/bi";

import { usePopout } from "../../context/MenuContext/useMenu";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  const { handleChangePopout } = usePopout();

  return (
    <header className={styles.container}>
      <div className={styles.contaienrMenu}>
        <BiMenu onClick={handleChangePopout} />
      </div>
      <div className={styles.containerTitle}>
        <h3>Brasil Tropical</h3>
      </div>
    </header>
  );
};
