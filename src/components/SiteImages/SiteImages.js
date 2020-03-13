import React from 'react';

import './SiteImages.css';

export function SiteImages({sites}){

    
    const {pagesFirst} = sites;

    console.log(sites);
    
    const size = pagesFirst && pagesFirst.length;

    let rows = [];

    for(let i=0; i<size; i++){
        rows.push(
            <div>
                 <div className="name-page">
                     <h4> Teste </h4>
                 </div>
                 <div className="url-screenshoot-one">
                     <h3>{sites.pagesFirst[i]}</h3>
                     <img src={sites.imagesFirst.url[i]} alt="Logo" width="150px" />
                 </div>
                 <div className="url-screenshoot-second">
                     <h3>{sites.pagesFirst[i]}</h3>
                     <img src={sites.imagesFirst.url[i]} alt="Logo" width="150px" />
                 </div>
            </div>
        
      )
    }



    return(
        <div className="site-images">
               {rows}
        </div>
    );
}