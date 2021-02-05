const superagent = require('superagent');

superagent.get('https://api.nasa.planetary/apod')
.query({api_key:'DEMO_KEY', date:'2021-02-02'})
.end((err,res) => {
    if (err){
        return console.log(err);
    }
    console.log(res.body.url);
    console.log(res.body.explanation);
})