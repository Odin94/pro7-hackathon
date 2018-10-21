import React, { Component } from 'react';
import {get_live_events} from '../api_requester/7sport'
import SportEvent from './SportEvent';


const EntertainmentInfo = (props) => {
    const live_events = get_live_events().items.slice(0, 3);
    console.log(live_events);

    const backupImageUrl = "http://manager.vidibuscloud.net/mediafiles/6893/7072/6215/8d54b91072ea0136871e543d7edaf0a0/livestream-dbbl-freiburg_1024x576.jpg";

    return (
        <div className="container" style={ { boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)', marginTop: "45px", padding: "15px", paddingBottom: "15px" } }>
            <h3>Live Sports</h3>
            <div className="row" style={{paddingRight: "0", paddingLeft: "0"}}>
                {
                    live_events.map(
                        (event, i) => {
                            try {
                                return <SportEvent sportType={event.tags.Sportart[0]} imageUrl={event.images.slice(-1)[0]} sportUrl={event.path} startTime={new Date(event.starts_at)} key={i} />
                            }
                            catch(err) {
                                return <SportEvent sportStyle={"Basketball"} imageUrl={backupImageUrl} sportUrl="" startTime={new Date()} key={i} />
                            }
                        }
                    )
                }
            </div>
        </div>
    )
}

export default EntertainmentInfo;