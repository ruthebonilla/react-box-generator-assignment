import React from 'react';
import './boxes.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Boxes = (props) => {
    return(
        <div className='boxes'>
            <section style={{ display: "flex", justifyContent: "center" }}>
            {props.boxes.map((item, i) => {
                return  <div className="m-3 colorbox" key={i} style={{backgroundColor: item.color}}>
                        </div>
            })}
            </section>
        </div>
    );
};

export default Boxes;
