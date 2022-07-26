import styles from "./Card.module.scss";
import Image from "next/image";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          layout="fill"
          src="/images/mator.jpg"
          alt="mator"
          objectFit="cover"
        />
      </div>
      <p className={styles.card__description}>
        Customer Name : John Doe <br />
        Sales Person : John Doe <br />
        Note : John Doe <br />
        Date : John Doe <br />
        Product : John Doe <br />
      </p>
    </div>
  );
};
export default Card;
