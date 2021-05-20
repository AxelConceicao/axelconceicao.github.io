import React from 'react'
import { useState } from 'react'

import { Card, CardBody, Col, Button } from 'reactstrap'
import { Fade } from 'react-reveal'

import Carousel, { Dots } from '@brainhubeu/react-carousel'
import ImageZoom from 'react-medium-image-zoom'

const ProjectsCard = ({ data }) => {
  const [value, setValue] = useState(0)
  const onChange = (value) => {
    setValue(value)
  }
  return (
    <Col lg="12">
      <Fade bottom duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex">
              <Col lg="8">
                <h3 className="text-dark">{data.name}</h3>
              </Col>
              <Col lg="4">
                <div className="d-flex" style={{ justifyContent: 'flex-end' }}>
                  {data.github ? (
                    <Button className="btn-icon px-3" style={{ height: '35px', lineHeight: '1' }} color="github" href={data.github} target="_blank">
                      <span className="btn-inner--icon">
                        <i className="fa fa-github mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Github</span>
                    </Button>
                  ) : null}
                  {data.demo ? (
                    <Button className="btn-icon px-3" style={{ height: '35px', lineHeight: '1' }} color="success" href={data.demo} target="_blank">
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Demo</span>
                    </Button>
                  ) : null}
                </div>
              </Col>
            </div>
            <div className="d-flex">
              <Col lg="8">
                <p className="description" style={{ textAlign: 'justify' }}>
                  {data.desc}
                </p>
              </Col>
              <Col lg="4">
                <strong className="mb-1">Technologies utilisées :</strong>
                <ul>
                  {data.techno.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Col>
            </div>
            <Carousel plugins={['arrows']} value={value} onChange={onChange}>
              {data.images.map((img, i) => {
                return (
                  <div key={i} className="d-flex" style={{ flexDirection: 'column' }}>
                    <ImageZoom
                      image={{
                        src: process.env.PUBLIC_URL + img.src,
                        alt: img.alt,
                        className: 'img',
                        style: { margin: 'auto', height: '430px' },
                      }}
                    />
                    <p className="mt-2 mb-0" style={{ textAlign: 'center' }}>
                      {img.alt}
                    </p>
                  </div>
                )
              })}
            </Carousel>
            <Dots value={value} onChange={onChange} number={data.images.length} />
            {/* <Dots value={this.state.value} onChange={this.onChange} /> */}
          </CardBody>
        </Card>
      </Fade>
    </Col>
  )
}

export default ProjectsCard
