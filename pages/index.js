import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Link href="/today">To-do-list</Link>
        </Col>
      </Row>
    </Container>
  );
}
