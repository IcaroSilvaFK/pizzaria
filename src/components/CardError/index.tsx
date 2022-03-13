import { FC } from "react";

import { RiArrowLeftSFill } from "react-icons/ri";

import styles from "./styles.module.scss";

interface ICardErrorProps {
  error?: string;
}

export const CardError: FC<ICardErrorProps> = ({ error }) => {
  if (!error) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <RiArrowLeftSFill />
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};
