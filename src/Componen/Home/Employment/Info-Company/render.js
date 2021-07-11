import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";

function Render (props) {
    const render = props;
    return (
        <>
            <div className="Protofile">
                <Grid item xs={12} container >            
                    <div className="container">
                        <div className="row">
                            <div className="Info-left">
                                <div className="Info-left-item col-lg-5">
                                    {/* <span>TỔNG QUAN VỀ CÔNG TY</span> */}
                                    <h2>{render?.name || ""}</h2>
                                    <div>
                                        <p>{render?.webstie || ""}</p>
                                    </div>
                                    <div>
                                        <p>{render?.nation || ""}</p>
                                    </div>
                                    <div>
                                        <p>{render?.address || ""}</p>
                                    </div>
                                    <div>
                                        <p>{render?.numberPhone || ""}</p>
                                    </div>
                                    <div>
                                        <p>{render?.email || ""}</p>
                                    </div>
                                </div>
                                <div className="Info-right-item col-lg-7 mt_md--40 mt_sm--40">
                                    <div className="Info-right-item-Img">
                                        <img src={render?.avatar || ""}/>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </Grid>
        </div>       
    </>
    );

}

export default Render;
