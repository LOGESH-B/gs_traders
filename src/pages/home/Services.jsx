import './Services.css';
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

import transport from '../../assets/serviceImage/transport.png'
import worker from '../../assets/serviceImage/worker.png'
import project from '../../assets/serviceImage/project.png'
import technical from '../../assets/serviceImage/technical.png'

function Service({ className, ...rest }) 
{

  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>

      <h4 className='fw-bold fs-1 service'>SERVICES</h4>
      <section className="counter">
        <div className="counter-row">
          <div className="counter-column">
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={40}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}>
                        
                      <span className="number" ref={countUpRef}></span>
                      
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
              <span className="number">+</span>
              <div className="text-center mt-3">
                <img src={transport} className="rounded-circle" style={{height:'150px',width:'200px'}} alt="image"></img>
              </div>
              <h2 className='sText'>Vehicle's for free transportation</h2><hr/>
            
          </div>

          <div className="counter-column">
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={70}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}>
                        
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
              <span className="number">+</span>
              <div className="text-center mt-3">
                <img src={worker} className="rounded-circle" style={{height:'150px',width:'200px'}} alt="image"></img>
              </div>
              <h2 className='sText'>Worker's available for our project</h2><hr/>
            
          </div>

          <div className="counter-column">
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={110}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}>
                        
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
              <br/>
              <div className="text-center mt-4">
                <img src={project} className="rounded" style={{height:'170px',width:'200px'}} alt="image"></img>
              </div>
              <h2 className='sText mt-2'>Project's done</h2><hr/>
            
          </div>

          <div className="counter-column">
          <br/>
              <div className="text-center mt-5">
                <img src={technical} className="rounded-circle" style={{height:'170px',width:'170px'}} alt="image"></img>
              </div>
              <h2 className='sText'>Provide technical support </h2><hr/>
            
          </div>
        </div>
      </section>
      <br/><br/><br/>
    </>
  );
}

export default Service
