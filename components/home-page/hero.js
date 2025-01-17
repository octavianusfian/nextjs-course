import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/fian.jpg"
          alt="an image showing fian"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fian</h1>
      <p>
        I blog about web development - especially in frontend framworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
