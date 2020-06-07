import React,{ useState , useEffect }  from 'react';
import './VisualisationTableStyle.scss'





export const VisualisationTable = (props) => {
    const [data,setData] = useState([])

    // useEffect( async () => {
       
    //     const response = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page');
    //    // const data = response.json();
    //     console.log("Data---->",response);
    //     setData(data);

    // },[]);


    const renderRows = (rows) => {
        return (
            <tbody className="visualisationRowTree">
                 <tr
                   
                  >
                     <td style={{width:'15%'}}>
                      36
                     </td>

                     <td style={{width:'15%'}}>
                     96
                     </td>

                      <td style={{width:'15%'}}>
                  
                     </td>
                      <td >
                      Hi, Whatsaap ?
                     </td>
                 </tr>


            </tbody>
        )
        
    }
    return (

        <div className="visualizationTable">
             <table className="table">
                <thead>
                    <tr 
                     className ="row">
                        <th className ="rowHeaderData" >
                         Comments
                        </th>
    
                        <th className ="rowHeaderData">
                          Vote Count
                        </th>
    
                         <th className ="rowHeaderData">
                         UpVote   
                        </th>
                        
                        <th className ="rowHeaderData">
                         News Details   
                        </th>
                    </tr>
                </thead>
    
               {renderRows()}
             </table>
    
    
        </div>
    )
    
}

