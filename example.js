const got = require('got-cjs');
const generate_bogus = require( "./thebogus.js");

var url = "https://www.tiktok.com/api/user/detail/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Linux%20x86_64&browser_version=5.0%20%28X11%29&channel=tiktok_web&cookie_enabled=true&device_id=2176458173498178287&device_platform=web_pc&focus_state=true&from_page=user&history_len=2&is_fullscreen=false&is_page_visible=true&language=en&os=linux&priority_region=US&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=America%2FNew_York&uniqueId=mrbeast&webcast_language=en";
headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.1', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.5', 'x-tt-params': '0Ao2GQ2ts0LfwmhpM6WRLdXNyaAaWJBYIakfsbLqvJ6G2ak92/6NTHZgZnXsqDMRUnAGzO9MP6hPsEKOA5ZaeQmaNXjN7BSRjWMa9Zn4kjK0AN/l1QymUyPShL0+8nbYW8AL9VF7iUIhZVvbiaUeXAxIU2EbAkDvogRFTWYiSEi+l+XABW9GwttJQZ3Sx9fDvu54Ynwui9lRw23RqzE9n0VQ9ipl7Y3uJys8LloP0qgbODrEzg3JPZoCIt2H5lKqPChKap6UsUAmx873u7Nz7ZKQclLG0pBQHenNxAOadQ3a1yFLO0xzNyscZIUmi/B86lDwW7+8jKPwl9ThnNnnSDQVdzA1HOfL2iBDHZs4+obgwNuWaQp4WhL+4QCp1/NRRO1my6d5LIWKVCNPdvfQM8BSUuHVUoIW7YCwBSdWjzm/EtOddxIuPDdvmrD+81qKJsqeIIryK6r6egCgQ7gcDIjvhJtmH3IcSkysgMgCbRoXgbrqz25MDgOl9IpWJsxJstL/79ZoRSuo5U2mjEk0aT+Cfy4+3j92F4fK7U8Llpo5aPPs3s7L/+tTlCuxnqmJiecDyOwyEDptvKGt4tpGp+08RSgaRM6RIvbst2ijWoQFqtX0h+Z7MhjzHOopQOUdDIRF9CS0vBL5JVSIijFJ2tF4KorxEoVSpUD3DpnffvYI0GbH6IFVsUJ3Yqni0ec6'}

var xbogus = generate_bogus(url.split("?")[1], headers['User-Agent']);
url = url + "&X-Bogus=" + encodeURIComponent(xbogus);

async function getData() {
  const response = await got.got(url, {
    http2: true,
    method: 'GET',
    headers: headers
  });
  console.log(response.body);
}

getData();
