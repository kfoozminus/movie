// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const axios = require('axios')

/*  This is a sample API route. */

router.get('/search/:name', (req, res) => {

	const name = req.params.name;

	axios.get('http://www.omdbapi.com/?t=' + name + '&apikey=d1de464a')
	.then(response => {
		console.log(response.data.url);
		console.log(response.data.explanation);
		res.json(response.data)
	})
	.catch(error => {
		console.log(error);
	});
})




module.exports = router
