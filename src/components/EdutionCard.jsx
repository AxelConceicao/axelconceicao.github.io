import React from 'react'
import { Card, CardBody, Badge } from 'reactstrap'
import { Fade } from 'react-reveal'

const EdutionCard = ({ education }) => {
  return (
    <Fade right duration={1000} distance="40px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody style={{ minHeight: '200px' }}>
          <div className="d-flex" style={{ flexDirection: 'column' }}>
            <div className="d-flex" style={{ alignItems: 'center' }}>
              <div className="mr-3">
                <img src={require(`../assets/img/${education.logo.name}.png`).default} alt="Logo" height={education.logo.height} />
              </div>
              <div>
                <h5 className="text-dark mb-0">
                  <strong>{education.schoolName}</strong>
                </h5>
                <p className="text-dark mb-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {education.subHeader}
                </p>
                <Badge style={{ backgroundColor: education.logo.color }} color="info" className="mr-1">
                  {education.duration}
                </Badge>
              </div>
            </div>
            <p className="text-dark description mt-3" style={{ textAlign: 'justify' }}>
              {education.desc}
            </p>
            <ul>
              {education.descBullets
                ? education.descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>
                  })
                : null}
            </ul>
            <a target="_blank" rel="noopener noreferrer" href={education.more} style={{ fontSize: '14px', color: education.logo.color }}>
              En savoir plus...
            </a>
          </div>
        </CardBody>
      </Card>
    </Fade>
  )
}

export default EdutionCard
