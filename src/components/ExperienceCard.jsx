import React, { useState, createRef } from 'react'
import { Badge, Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, Col } from 'reactstrap'
import ColorThief from 'colorthief'
import { Fade } from 'react-reveal'

const ExperienceCard = ({ data }) => {
  const [colorArrays, setColorArrays] = useState([])
  const imgRef = createRef()

  function getColorArrays() {
    const colorThief = new ColorThief()
    setColorArrays(colorThief.getColor(imgRef.current))
  }

  function rgb(values) {
    return typeof values === 'undefined' ? null : 'rgb(' + values.join(', ') + ')'
  }

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
                ref={imgRef}
                className="img-center img-fluid"
                top
                src={data.companylogo}
                style={{ width: data.logowidth }}
                onLoad={() => getColorArrays()}
                alt=""
              />
            </div>
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <Badge style={{ backgroundColor: data.color }} color="info" className="mt-2">
              {data.status}
            </Badge>
            <CardText className="description my-3 text-left">
              <p style={{ textAlign: 'justify' }}>{data.desc}</p>
              <ul className="pl-4">
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return (
                        <li style={{ textAlign: 'justify' }} key={desc}>
                          {desc}
                        </li>
                      )
                    })
                  : null}
              </ul>
            </CardText>
            <div></div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  )
}

export default ExperienceCard
