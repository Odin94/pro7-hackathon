export function get_live_events(callback) {
    const url = "http://sportdeutschland.tv/api/live_events";
    fetch(url)
        .then(data => {
            return data.json
        })
        .then(res => {
            console.log(res);
            callback(res)
        });
}