import React from 'react'
import { Card, Col, Row, Container } from 'reactstrap'
import SocialLinks from '../components/SocialLinks'
import Particles from 'react-particles-js'

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-dark shadow-lg border-0">
      <div style={{ position: 'absolute', width: '100%', top: '0' }}>
        <Particles
          height="450px"
          params={{
            particles: {
              number: {
                value: 30,
              },
            },
          }}
        />
      </div>
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
              <p className="text-white mt-3">{prof.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-dark">
                <i className="ni ni-pin-3 text-dark mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  )
}

export default GithubProfileCard
