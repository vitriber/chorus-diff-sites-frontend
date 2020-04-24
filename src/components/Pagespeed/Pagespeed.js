import React, { useState } from "react";
import "./Pagespeed.css";

import { Row, Col, Tabs, Tab } from 'react-bootstrap';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Pagespeed = ({ SourceHostScore, TargetHostScore, SourceHostname, TargetHostname }) => {

  const valuehostscoremobile = SourceHostScore && SourceHostScore.speedScoreMobile;
  const valuehostscoredesktop = SourceHostScore && SourceHostScore.speedScoreDesktop;
  const valuetargetscoremobile = TargetHostScore && TargetHostScore.speedScoreMobile;
  const valuetargetcoredesktop = TargetHostScore && TargetHostScore.speedScoreDesktop;

  const hostindexmobile = SourceHostScore && SourceHostScore.speedIndexMobile;
  const hostindexdesktop = SourceHostScore && SourceHostScore.speedIndexDesktop;

  const targetindexmobile = TargetHostScore && TargetHostScore.speedIndexMobile;
  const targetindexdesktop = TargetHostScore && TargetHostScore.speedIndexDesktop;

  const performancemobile = (1 - (targetindexmobile/hostindexmobile)) * 100;
  const performancedesktop = (1 - (targetindexdesktop/hostindexdesktop)) * 100;
  
  console.log(performancedesktop)
  console.log(performancemobile);


  const [key, setKey] = useState('mobile');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      className="table-pagespeed"
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="mobile" title="Mobile" className="tabs-pagespeed">
        <Row>
          <Col>
            <div className="site-name">
              <h4>{SourceHostname}</h4>
              <CircularProgressbar
                className="circle-progress"
                value={valuehostscoremobile}
                maxValue={1}
                text={`${valuehostscoremobile * 100}%`}
              />
            </div>
          </Col>
          <Col>
            <div className="score-comparision">
              <h3>{performancemobile.toFixed(2)}</h3>
              <p>GANHO DE PERFORMANCE</p>
            </div>
          </Col>
          <Col>
            <div className="site-name">
              <h4>{TargetHostname}</h4>
              <CircularProgressbar
                className="circle-progress"
                value={valuetargetscoremobile}
                maxValue={1}
                text={`${valuetargetscoremobile * 100}%`}
              />
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="desktop" title="Desktop" className="tabs-pagespeed">
        <Row>
          <Col>
            <div className="site-name">
              <h4>{SourceHostname}</h4>
              <CircularProgressbar
                className="circle-progress"
                value={valuehostscoredesktop}
                maxValue={1}
                text={`${valuehostscoredesktop * 100}%`}
              />
            </div>
          </Col>
          <Col>
            <div className="score-comparision">
              <h3>{performancedesktop.toFixed(2)}</h3>
              <p>GANHO DE PERFORMANCE</p>
            </div>
          </Col>
          <Col>
            <div className="site-name">
              <h4>{TargetHostname}</h4>
              <CircularProgressbar
                className="circle-progress"
                value={valuetargetcoredesktop}
                maxValue={1}
                text={`${valuetargetcoredesktop * 100}%`}
              />
            </div>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
};