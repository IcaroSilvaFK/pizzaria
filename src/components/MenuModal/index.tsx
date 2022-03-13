import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import { usePopout } from "../../context/MenuContext/useMenu";

import styles from "./styles.module.scss";

export const MenuModal: FC = () => {
  const router = useRouter();
  const pathName = router.pathname;

  const { handleChangePopout } = usePopout();

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.containerIconClose} onClick={handleChangePopout}>
          <IoMdClose />
        </div>
        <ul>
          <li>
            <Link href="/menu">
              <a
                className={pathName === "/menu" ? styles.active : ""}
                onClick={handleChangePopout}
              >
                Menu
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Pedidos">
              <a
                className={pathName === "/Pedidos" ? styles.active : ""}
                onClick={handleChangePopout}
              >
                Pedidos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/NewOrder">
              <a
                className={pathName === "/NewOrder" ? styles.active : ""}
                onClick={handleChangePopout}
              >
                Novo Pedido
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
