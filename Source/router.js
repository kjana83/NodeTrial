function route(handle, pathname){
    console.log("About to route"  + pathname);
	
	if (typeof handle[pathname]==='function'){
		return handle[pathname]();
		}
	else{
		console.log("No request handler found for" + pathname);		
		return "404 Not found";
	}
}

exports.route = route;