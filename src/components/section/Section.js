import Styles from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <>
      <section>
        <h2 className={Styles.title}>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Section;
