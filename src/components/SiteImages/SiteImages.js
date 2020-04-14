import React from 'react';

import './SiteImages.css';

export function SiteImages({sites}){

    
    const {Screnshots} = sites;

    console.log(sites);
    console.log(Screnshots);

    return(
        <div className="site-images">
            {Screnshots && Screnshots.map(screenshot => (
                <div>                
                    <div className="name-page">
                        <h4> {screenshot.pathName} </h4>
                    </div>
                    <div className="url-screenshoot-one">
                        <a href={`${screenshot.sourceUrl}`}>
                            <h3>{screenshot.sourceUrl}</h3>
                        </a>
                        <img src={screenshot.sourceImage} alt="Logo" width="150px" />
                    </div>
                    <div className="url-screenshoot-second">
                        <a href={`${screenshot.targetUrl}`}>
                            <h3>{screenshot.targetUrl}</h3>
                        </a>
                        <img src={screenshot.targetImage} alt="Logo" width="150px" />
                    </div>
                </div>
            ))}  
        </div>
    );
}