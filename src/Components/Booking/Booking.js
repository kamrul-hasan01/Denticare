import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Image, InputGroup, Row, Spinner } from 'react-bootstrap';
import bookingPic from '../../img/booking.jpg'
import Dentcare from '../Dentcare/Dentcare';
import "./Booking.css"

const Booking = () => {
    const [information, setInfoormation] = useState({});

    useEffect(() => {
        fetch('./booking.json')
            .then(res => res.json())
            .then(data => {

                setInfoormation(data)

            })
    }, [])
    return (
        <div className="booking-custom-bg py-5">
            <Container id="booking">
                <Row>
                    <Col md={6}>
                        <h5 className="fs-3 fw-lighter mb-2">Book Your Visit At <span className="text-info">DentiCare</span></h5>

                        <p>Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.</p>
                        <hr />
                        <Row>
                            <Col md={6}>
                                <h5 className="fw-lighter">Your Name</h5>
                                <InputGroup className="mb-3 " size="lg">

                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <h5 className="fw-lighter">Your Email</h5>
                                <InputGroup className="mb-3 " size="lg">

                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <h5 className="fw-lighter">Choose Your Dentist</h5>
                                <InputGroup className="mb-3 " size="lg">

                                    <Form.Select aria-label="Default select example" className="fw-lighter">
                                        <option>Select Dentist Here</option>
                                        <option value="1">MD Kamrul Hasan</option>
                                        <option value="2">MD Mehedi Hasan</option>
                                        <option value="3">MD Shakil Chow</option>
                                    </Form.Select>
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <h5 className="fw-lighter">Appointment Date</h5>

                                <InputGroup className="mb-3 " size="lg">

                                    <FormControl
                                        className="fw-lighter"
                                        type="date"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs={12} className="text-center pt-3">
                                <Button variant="info" className="fs-5 text-white">Book Appointment Now</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={6}>
                        <Image src={bookingPic} rounded fluid style={{ height: "450px" }} />
                    </Col>
                </Row>
                <Row className="py-3">
                    {
                        information?.length ? information.map(info => <Dentcare
                            key={info.id}
                            info={info}></Dentcare>) : <Spinner animation="border" variant="primary" />


                    }
                </Row>

            </Container>
        </div>
    );
};

export default Booking;