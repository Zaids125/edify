import React from 'react';
import classes from "./PortfolioPDF.module.css";


function Assignment() {

return (

	<div className={classes.mainContainer}>
        <div className={classes.Container}>
            <div className={classes.Block}>
                <div className={classes.Block1}>
                    <div className={classes.Tag}>Designer</div>
                    <h2>Zaid</h2>
                    <h2>Shaikh</h2>
                </div>
                <div className={classes.Block2}>
                    <div className={classes.Tag}>Contact</div>
                    <p>+91 7752012364</p>
                    <p>mail@email.com</p>
                    <p>Mumbai, Maharashtra</p>
                </div>
            </div>
        </div>
	</div>
);
}

export default Assignment;
