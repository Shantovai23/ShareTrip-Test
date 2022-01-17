import React from "react";
import { Container } from "react-bootstrap";
import less from "../images/less.png";
import greater from "../images/greater.png";
import stone from '../images/stone.png'
import cheap from '../images/cheap.png'
import electra from '../images/electra.png'
import directionBus from '../images/direction-bus.png'
import money from '../images/money.png'
import {Link} from 'react-router-dom'

const BusSummary = () => {
  return (
    <section className="summary-section">
      <Container>
        <div className="summary-flex">
          <div className="empty-bar"></div>
          <div className="summary-content">
            <div>
              <p className="total-bus">48 Available Buses</p>
            </div>

            <div className="bus-list">
              <div className='less'>
                <img src={less} alt="Left" className='sign' />
              </div>
              <div>
                <p className='bus-name'>Hanif Enterprize</p>
                <p className='buses'>40 Buses</p>
              </div>
              <div>
                <p className='bus-name'>Shohag Paribahan</p>
                <p className='buses'>40 Buses</p>
              </div>
              <div>
                <p className='bus-name'>Ena Transport (PVT) Ltd</p>
                <p className='buses'>40 Buses</p>
              </div>
              <div>
                <p className='bus-name'>Saintmartin Travels</p>
                <p className='buses'>40 Buses</p>
              </div>
              <div>
                <p className='bus-name'>Soudia Coach Service</p>
                <p className='buses'>40 Buses</p>
              </div>
              <div>
                <p className='bus-name'>Saintmartin Hyundai</p>
                <p className='buses'>40 Buses</p>
              </div>
              <div className='greater'>
                <img src={greater} alt="right" className='sign' />
              </div>
            </div>

            <div className='categories'>
                <div>
                    <img src={stone} alt="Stone" className='categories-img'/>
                    <p className='categories-name'>Earliest Buses</p>
                </div>
                <div className='selected-category'>
                <img src={cheap} alt="Cheap" className='categories-img'/>
                    <p className='categories-name'>Cheapest Buses</p>
                </div>
                <div>
                <img src={electra} alt="Electra" className='categories-img'/>
                    <p className='categories-name'>Available Seats</p>
                </div>
                <div>
                <img src={electra} alt="Electra" className='categories-img'/>
                    <p className='categories-name'>Fastest Trip</p>
                </div>
            </div>

            <div className='ticket-details'>
               <div className='ticket-content'>
                   <p style={{fontWeight:'600',marginBottom:'12px'}}>AC</p>
                   <p style={{fontSize:'11px',color:'#626262'}}>From</p>
                   <p style={{color:'#color: #202020',fontSize:'14px'}}>DHAKA <span style={{fontWeight:'600'}}>11:30 PM</span></p>
                   <p style={{fontSize:'12px',color:'#626262'}}>Kolabagan Counter</p>
                   <p style={{fontSize:'11px',color:'#626262'}}>22 June 2021</p>
               </div>
               <div className='ticket-content'>
                   <p style={{fontWeight:'600',textAlign:'center'}}>Hanif Enterprize</p>
                   <p style={{fontSize:'11px',color:'#626262',textAlign:'center',marginBottom:'12px'}}>31-DHK-CTG(D)</p>
                   <img src={directionBus} alt="DirectionBus" style={{padding:'0px 10%'}} className='direction-bus'/>
                   <p style={{fontSize:'13px',textAlign:'center',color:'#F4A67F'}}>16 Seats Available</p>
                   <p style={{fontSize:'11px',color:'#626262',textAlign:'center'}}>6h 00m</p>
               </div>
               <div className='ticket-content'>
                   
                   <p style={{fontWeight:'600',float:'right',lineHeight:'18px'}}>55</p>
                   <img src={money} alt="Money" style={{float:'right',marginBottom:'12px'}}/>
                   <div style={{marginTop:'40px'}}>
                   <p style={{fontSize:'11px',color:'#626262'}}>To</p>
                   <p style={{color:'#color: #202020',fontSize:'14px'}}>CHOTTOGRAM<span style={{fontWeight:'600'}}> 5:30 PM</span></p>
                   <p style={{fontSize:'12px',color:'#626262'}}>Dampara Counter</p>
                   <p style={{fontSize:'11px',color:'#626262'}}>23 June 2021</p>
                   </div>
               </div>
               <div style={{backgroundColor:'#E5F2FE'}} className='ticket-content'>
                   <p style={{fontSize:'11px',fontWeight:'600',textAlign:'right'}}>Per Person</p>
                   <p style={{color:'#3B71DD',textAlign:'right',fontWeight:'700',fontSize:'18px'}}>BDT 750</p>
                   <p style={{color:'#7EBAFE',textAlign:'right',fontWeight:'600'}}>BDT 775</p>
                   <Link to='/view-seats' className="seat-button">VIEW SEATS</Link>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusSummary;
