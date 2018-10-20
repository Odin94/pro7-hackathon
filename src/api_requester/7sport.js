export function get_live_events() {
    const url = "http://sportdeutschland.tv/api/live_events";

    var request = new XMLHttpRequest();
    request.open('GET', url, false); // `false` makes the request synchronous
    request.send(null);

    return JSON.parse(request.responseText);
}