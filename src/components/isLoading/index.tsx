import React from "react";
import Image from "next/image";
import Loading from "public/tenor.gif";
import styles from "./styles.module.scss";

const IsLoading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <Image
        src={Loading}
        width={Loading.width / 3}
        height={Loading.height / 3}
        alt="image please wait"
        className="loaderImg"
      />
    </div>
  );
};

export default IsLoading;
