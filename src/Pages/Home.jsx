import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header
        titulo={"One Page Wonder"}
        subtitle={"Will Rock Your Socks Off"}
        url={"#scroll"}
        label={"Learn More"}
        color={"warning"}
      />
      <Section
        id={"scroll"}
        title={"For those about to rock..."}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elitaliquid, mollitia odio veniam sit iste esse assumenda ametaperiam exercitationem, ea animi blanditiis recusandae!Ratione voluptatum molestiae adipisci, beatae obcaecati. "
        }
        image={"assets/img/01.jpg"}
        order={"right"}
      />
      <Section
        title={"For those about to rock..."}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elitaliquid, mollitia odio veniam sit iste esse assumenda ametaperiam exercitationem, ea animi blanditiis recusandae!Ratione voluptatum molestiae adipisci, beatae obcaecati. "
        }
        image={"assets/img/02.jpg"}
        order={"left"}
      />
      <Section
        title={"For those about to rock..."}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elitaliquid, mollitia odio veniam sit iste esse assumenda ametaperiam exercitationem, ea animi blanditiis recusandae!Ratione voluptatum molestiae adipisci, beatae obcaecati. "
        }
        image={"assets/img/03.jpg"}
        order={"right"}
      />
      <Footer />
    </>
  );
};

export default Home;
