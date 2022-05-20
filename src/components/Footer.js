const Footer = (props) => {
    console.log(props.year);
    return (
      <footer>
        <p>{props.year}</p>
        <p>© TRABELSI Motaz</p>
      </footer>
    );
  };
  export default Footer;
  