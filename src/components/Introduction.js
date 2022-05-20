import imgsrc from "../images/p1.jpg";

const Introduction = (props) => {
  console.log(props);
  console.log(props.prenom);

  return (
    <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">{props.prenom}</span>,<br />
        and i make unique websites.
      </h1>
      <img class="avatar" src={imgsrc} alt="TRABELSI Motaz" />
    </section>
  );
};
export default Introduction;
