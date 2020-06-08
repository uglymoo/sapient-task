import React, { useState, useEffect } from 'react';
import './VisualisationTableStyle.scss';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { VisualisationChart } from './VisualisationChart'





export const VisualisationTable = (props) => {
    const [data, setData] = useState(null)

    
    const upVote = ( score ,index) => {
     
        const votedvalue = score+1;
        const IndexValue = index;
        console.log("VOTED VALUE",votedvalue);
        console.log("INDEX VALUE",IndexValue);
        let upVoted =[];

        if(data) {
         upVoted = data.hits;
         console.log("DATA IS THERE",upVoted);
         data && upVoted.map((vote,i) => {
            if(IndexValue === i) 
            {
                return vote.relevancy_score = votedvalue;
            }
        })
       //  setData(upVoted);
 
    }
 

  


    }

    useEffect(async () => {


            const response = await fetch('http://hn.algolia.com/api/v1/search?query=bar&tags=comment');
                const data =  await response.json();
                  console.log("Data---->", data);
                    setData(data);


    }, []);



    const renderRows = (rows) => {


        return (
            <tbody className="visualisationRowTree">
                {

                    data && data.hits.map((row,index) => {

                        return (
                            <tr>

                                {

                                    <td style={{ width: '1%' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>{row.points}</div>
                                    </td>

                                }

                                <td style={{ width: '1%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>{row.relevancy_score}</div>
                                </td>
                                <td style={{ width: '1%' }}>
                                    <div
                                    onClick = {() =>upVote(row.relevancy_score,index)}
                                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                                        <ArrowDropUpIcon
                                         
                                        />
                                    </div>
                                </td>




                                <td style={{ width: '8%' }}>
                                    {row.story_title}
                                </td>


                            </tr>
                        )
                    })

                }
                <tr

                >



                </tr>


            </tbody>
        )



    }
    return (
        <div>


            <div className="visualizationTable">

                <table className="table" style={{ border: 'solid', borderBottomColor: 'orangered' }}>
                    <thead>
                        <tr
                            className="row">

                            <th className="rowHeaderData" >
                                Comments
                        </th>

                            <th className="rowHeaderData">
                                Vote Count
                        </th>

                            <th className="rowHeaderData">
                                UpVote
                        </th>

                            <th className="rowHeaderData">
                                News Details
                        </th>
                        </tr>
                    </thead>

                    {renderRows()}

                    

                </table>



            </div>


            <div style={{ width: '1350px', border: 'solid', borderTop: 'unset' }}>
                <VisualisationChart />
            </div>


        </div>
    )



}

