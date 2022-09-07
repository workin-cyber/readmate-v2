import styles from "./style.module.css";
import mailSrc from "./mail.svg"
import phoneSrc from "./phone.svg"
import webSrc from "./web.svg"


export default function ContactUs() {

  return (
    <div className={styles.container} >

      <LinkCostum href={"Tel: +1 1800 123 456"} src={phoneSrc} alt="phone" span={"Phone"} p="+1 1800 123 456" />
      <LinkCostum href={"mailto: test@testmail.com"} src={mailSrc} alt="mail" span={"email us"} p="test@testmail.com" />
      <LinkCostum href={"www.domainname.com"} src={webSrc} alt="web" span={"Website"} p="www.domainname.com" />

    </div>
  );
}

const LinkCostum = ({ href, src, alt, span, p }) =>
  <div className={styles.btnDiv} >
    <a href={href} >
      <img src={src} alt={alt} />
    </a>
    <span>{span}</span>
    <p>{p}</p>
  </div>
