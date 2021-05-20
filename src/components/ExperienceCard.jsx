import React from 'react'
import { Badge, Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, Col } from 'reactstrap'
import { Fade } from 'react-reveal'

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <Fade left duration={1000} distance="40px">
        <Card style={{ flex: 1 }} className="card-zoom shadow-lg--hover shadow border-0 text-center rounded">
          <CardHeader style={{ background: data.color }}>
            <h3 className="text-white mb-0">{data.company}</h3>
          </CardHeader>
          <CardBody style={{ minHeight: '500px' }}>
            <div className="d-flex mb-3" style={{ height: '120px', alignItems: 'center' }}>
              <img
                className="img-center img-fluid"
                src={data.companylogo}
                style={{ width: data.logowidth }}
                alt={data.company}
              />
            </div>
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <Badge style={{ backgroundColor: data.color }} color="info" className="mt-2">
              {data.status}
            </Badge>
            <div className="mt-3 text-justify">
              <CardText>{data.desc}</CardText>
              <ul className="pl-4 mb-0">
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return (
                        <li key={desc}>
                          <p className="mb-1" style={{ fontSize: '14px' }}>
                            {desc}
                          </p>
                        </li>
                      )
                    })
                  : null}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  )
}

export default ExperienceCard
