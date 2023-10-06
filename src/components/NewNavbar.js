import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NewNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="nb">
        <Container>
          <Navbar.Brand href="/" className="newNavBrand">
            Happy Heels
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/writings">About</Nav.Link>
            <Nav.Link href="/works">
              <PiShoppingCartFill />
            </Nav.Link>
            {/* <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NewNavbar;
