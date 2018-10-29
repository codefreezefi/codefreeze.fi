const width = document.documentElement.clientWidth;
const mapFrame = document.createElement('iframe');
mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6030157.151980942!2d18.496274062793045!3d68.34660796508547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45cd5b14f6dd1919%3A0x8a4f8186f405e675!2zU3VvbWVuIExhdHUgS2lpbG9ww6TDpC9GZWxsIENlbnRyZSBLaWlsb3DDpMOk!5e0!3m2!1sde!2sfi!4v1516450974145';
mapFrame.width = width;
mapFrame.height = Math.min((width / 800 * 600), 450);
mapFrame.frameborder = 0;

const map = document.getElementById('map').appendChild(mapFrame);

// Tweets
const tweets = document.getElementById('tweets');
if (width > 250) {
    const tweetLinks = [];
    for(let i = 0; i < tweets.children.length; i++) {
        tweetLinks.push(tweets.children[i].href);
    }
    tweets.innerHTML = '';
    twttr.ready(
        function (twttr) {
            tweetLinks
                .sort(() => Math.random() - Math.random())
                .slice(0, Math.floor(width/250))
                .forEach(function (link) {
                twttr.widgets.createTweet(
                    link.split('/').pop(),
                    tweets,
                    {
                        theme: 'dark',
                        width: 250
                    }
                );
            })
        }
    );


}