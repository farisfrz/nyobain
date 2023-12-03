// api url
const api_url = "https://api.thingspeak.com/channels/2057949/feeds.json?api_key=008E4WFWLX0KWA3J&results=2";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Suhu").innerHTML = obj.field1;
      document.getElementById("Jarak").innerHTML = obj.field2;
    });
}, 1000);