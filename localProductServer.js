let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let baseURL = "https://repo-8qu2.onrender.com/productServer";
let axios = require("axios");

app.get("/myserver/customers", function(req,res){
	const { performance } = require("perf_hooks");
	const t0 = performance.now();
	axios.get(baseURL+"/customers")
	.then(function(response){
		console.log(response.data);
		const t1 = performance.now();
		let timeTaken = t1 - t0;
		res.send({data: response.data, status:response.status+" "+response.statusText, timeTaken : timeTaken});
		//res.send(response.data);
	})
	.catch(function (error){
		if(error.response) {
			let {status,statusText} = error.response;
			console.log(status,statusText);
			const t2 = performance.now();
			let timeTaken = t2 - t0;
			res.status(status).send({data:statusText,status:status, timeTaken: timeTaken});
			//res.status(status).send(statusText);
		}
		else res.status(404).send(error);
	});
});

app.get("/myserver/products", function(req,res) {
	const { performance } = require("perf_hooks");
	const t0 = performance.now();
	axios.get(baseURL+"/products")
	.then(function(response){
		console.log(response.data);
		const t1 = performance.now();
		let timeTaken = t1 - t0;
		res.send({data: response.data, status:response.status+" "+response.statusText, timeTaken : timeTaken});
		//res.send(response.data);
	})
	.catch(function(error) {
		if (error.response) {
			let {status,statusText} = error.response;
			console.log(status,statusText);
			const t2 = performance.now();
			let timeTaken = t2 - t0;
			res.status(status).send({data:statusText,status:status, timeTaken: timeTaken});
			//res.status(status).send(statusText);
		}
		else res.status(404).send(error);
	});
});

app.get("/myserver/orders", function(req,res) {
	const { performance } = require("perf_hooks");
	let { cust, prod } = req.query;
	let params = {};
	if (cust) params.cust = cust;
	if (prod) params.prod = prod;
	const t0 = performance.now();
	axios.get(baseURL+"/orders", { params: params })
	.then(function(response){
		console.log(response.timeout);
		const t1 = performance.now();
		let timeTaken = t1 - t0;
		res.send({data: response.data, status:response.status+" "+response.statusText, timeTaken : timeTaken});
	})
	.catch(function(error) {
		if (error.response) {
			let {status,statusText} = error.response;
			console.log(status,statusText);
			const t2 = performance.now();
			let timeTaken = t2 - t0;
			res.status(status).send({data:statusText,status:status, timeTaken: timeTaken});
		}
		else res.status(404).send(error);
	});
});

app.get("/myserver/orders/customer/:cust", function(req,res) {
	const { performance } = require("perf_hooks");
	let { cust } = req.params;
	const t0 = performance.now();
	axios.get(baseURL+`/orders/customer/${cust}`)
	.then(function(response){
		console.log(response.data);
		const t1 = performance.now();
		let timeTaken = t1 - t0;
		res.send({data: response.data, status:response.status+" "+response.statusText, timeTaken : timeTaken});
		//res.send(response.data);
	})
	.catch(function(error) {
		if (error.response) {
			let {status,statusText} = error.response;
			console.log(status,statusText);
			const t2 = performance.now();
			let timeTaken = t2 - t0;
			res.status(status).send({data:statusText,status:status, timeTaken: timeTaken});
			//res.status(status).send(statusText);
		}
		else res.status(404).send(error);
	});
});

app.get("/myserver/orders/product/:prod", function(req,res) {
	const { performance } = require("perf_hooks");
	let { prod } = req.params;
	const t0 = performance.now();
	axios.get(baseURL+`/orders/product/${prod}`)
	.then(function(response){
		console.log(response.data);
		const t1 = performance.now();
		let timeTaken = t1 - t0;
		res.send({data: response.data, status:response.status+" "+response.statusText, timeTaken : timeTaken});
		//res.send(response.data);
	})
	.catch(function(error) {
		if (error.response) {
			let {status,statusText} = error.response;
			console.log(status,statusText);
			const t2 = performance.now();
			let timeTaken = t2 - t0;
			res.status(status).send({data:statusText,status:status, timeTaken: timeTaken});
			//res.status(status).send(statusText);
		}
		else res.status(404).send(error);
	});
});

app.post("/myserver/orders", function(req,res) {
	const { performance } = require("perf_hooks");
	let body = req.body;
	const t0 = performance.now();
	axios.post(baseURL + "/orders", body).then(function (response) {
		console.log(response.data);
		const t1 = performance.now();
		let timeTaken = t1 - t0;
		console.log(response);
		res.send({data:[response.data], status:response.status+" "+response.statusText, timeTaken : timeTaken});
	}).catch(function(error){
		if (error.response) {
			let {status,statusText} = error.response;
			console.log(status,statusText);
			const t2 = performance.now();
			let timeTaken = t2 - t0;
			res.status(status).send({data:statusText,status:status, timeTaken: timeTaken});
			//res.status(status).send(statusText);
		}
		else res.status(404).send(error);
	});
})