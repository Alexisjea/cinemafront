import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return(
        <>
            <footer className="bg-dark text-white mt-5">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Mon Footer © {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}