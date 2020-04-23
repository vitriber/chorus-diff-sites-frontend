import React from "react";
import "./Pagespeed.css";

import { Col } from 'react-bootstrap';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Pagespeed = ({SourceHostScore, TargetHostScore, SourceHostname, TargetHostname}) => {

    const valuehostscoremobile = SourceHostScore && SourceHostScore.speedScoreMobile;
    const valuehostscoredesktop = SourceHostScore && SourceHostScore.speedScoreDesktop;
    const valuetargetscoremobile = TargetHostScore && TargetHostScore.speedScoreMobile;
    const valuetargetcoredesktop = TargetHostScore && TargetHostScore.speedScoreDesktop;


  return (
    <div className="score-pagespeed">
        <Col>
            <div className="site-name">
                <h4>{SourceHostname}</h4>
              <p> Mobile </p>
            <CircularProgressbar 
              className="circle-progress" 
              value={valuehostscoremobile} 
              maxValue={1} 
              text={`${valuehostscoremobile * 100}%`} 
            />
            <p>Desktop</p>
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
            <h3>?%</h3>
            <p>GANHO DE PERFORMANCE</p>
          </div>
        </Col>
        <Col>
            <div className="site-name">
                <h4>{TargetHostname}</h4>
                <p> Mobile </p>
          <CircularProgressbar 
            className="circle-progress" 
            value={valuetargetscoremobile} 
            maxValue={1} 
            text={`${valuetargetscoremobile * 100}%`} 
            />
            <p>Desktop</p>
           <CircularProgressbar 
              className="circle-progress" 
              value={valuetargetcoredesktop} 
              maxValue={1} 
              text={`${valuetargetcoredesktop * 100}%`} 
              />
              </div>
        </Col>
    </div>
  );
};