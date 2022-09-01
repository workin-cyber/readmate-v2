import styles from "./style.module.css";

/**
 * 
 * @param {{height:string,string,transform:string,background:string}} props 
 * @returns 
 */
function TwistBox({ height, width, transform, background, children }) {
  return (
    <>
      <div className={styles["placebox"]}>
        <div className={`${styles["box"]} ${styles["boxbehind"]}`} style={{ height, width, transform }}></div>
        <div className={styles["box"]} style={{ height, width, background }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default TwistBox;
