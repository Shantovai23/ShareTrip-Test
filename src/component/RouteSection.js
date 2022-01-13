import React from "react";
import arrow from "../images/arrow.png";
import { Container } from "react-bootstrap";
import RouteBox from "../component/RouteBox";
import { Link } from "react-router-dom";

const RouteSection = () => {
  return (
    <section>
      <div className="route-main">
        <Container>
          <div className="route-coloumn">
            <div
              style={{
                backgroundColor: "#4572D5",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "5px",
              }}
              className='route-hover'
            >
              <RouteBox
                routeHead="Onward Journey"
                routeName="Dhaka-Chottogram"
                routeDate="22 June,2021 (Tuesday)"
                busNo={true}
              />
            </div>

            <div className="arrow-box">
              <div>
                <img src={arrow} alt="arrow" style={{ cursor: "pointer" }} />
              </div>
            </div>

            <div
              style={{ padding: "12px", margin: "8px 0", borderRadius: "5px" }}
              className='route-hover'
            >
              <RouteBox
                routeHead="Return Journey"
                routeName="Chottogram-Dhaka"
                routeDate="24 June,2021 (Thursday)"
                busNo={false}
              />
            </div>
            <div className="button-box">
              <div>
                <Link to="modify-search" className="modify-button">
                  modify search
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default RouteSection;
