import React from 'react';
import './AppStyle.scss';
import { VisualisationTable } from './VisualisationTable';



const App = () => (
     <div>
            <img
             className='logo'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PS_Logo_RGB.svg/1200px-PS_Logo_RGB.svg.png" alt="PS Logo RGB.svg" />
            
             <div className ="VisualisationTable" style={{marginTop:'14%'}}>
             <VisualisationTable/>
         
             </div>

           

            
             
      
    </div>
);

export {App};