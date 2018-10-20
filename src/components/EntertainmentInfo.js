import React, { Component } from 'react';
import {get_live_events} from '../api_requester/7sport'
import SportEvent from './SportEvent';


const EntertainmentInfo = (props) => {
    const live_events = get_live_events().items.slice(0, 3);
    console.log(live_events);

    const backupImageUrl = "http://manager.vidibuscloud.net/mediafiles/6893/7072/6215/8d54b91072ea0136871e543d7edaf0a0/livestream-dbbl-freiburg_1024x576.jpg";

    return (
        <div className="row">
            {
                live_events.map(
                    (event, i) => {
                        try {
                            return <SportEvent sport_type={event.tags.Sportart[0]} image_url={event.images.slice(-1)[0]} sport_url={event.path} start_time={new Date(event.starts_at)} key={i} />
                        }
                        catch(err) {
                            return <SportEvent sport_type={"Basketball"} image_url={backupImageUrl} sport_url="" start_time={new Date(event.starts_at)} key={i} />
                        }
                    }
                )
            }
        </div>
    )
}
// 140x80

export default EntertainmentInfo;