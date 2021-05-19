import React, { Fragment } from 'react'

import { Fade } from 'react-reveal'
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json'

import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap'

import { skillsSection } from '../portfolio'
import '../assets/css/App.css'

const Skills = () => {
  return (
    <Fade left duration={1000} distance="40px">
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <Fade left duration={1000} distance="300px">
              <DisplayLottie animationData={webdev} />
            </Fade>
          </Col>
          <Col lg="6">
            <Fade top duration={1000} distance="100px">
              <div className="d-flex justify-content-center flex-wrap mt-5">
                {skillsSection.softwareSkills.map((skill) => {
                  return (
                    <Fragment key={skill.skillName}>
                      <div className="mb-5 myzoom">
                        <div className="icon icon-lg icon-shape shadow rounded-circle" id={skill.skillName}>
                          <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                        </div>
                      </div>
                      <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName}>
                        {skill.skillName}
                      </UncontrolledTooltip>
                    </Fragment>
                  )
                })}
              </div>
            </Fade>
            <Fade right duration={1000} distance="200px">
              <div>
                {skillsSection.skills.map((skill) => {
                  return <p key={skill}>{skill}</p>
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Fade>
  )
}

export default Skills
