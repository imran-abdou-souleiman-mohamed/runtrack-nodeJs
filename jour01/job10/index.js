const url = require('url');

const urlString = "https://www.google.com/search?query=nodejs";

// Parse the URL
const parsedUrl = url.parse(urlString);

// Retrieve the protocol
const protocol = parsedUrl.protocol;
console.log("Protocol:", protocol);

// Retrieve the hostname
const hostname = parsedUrl.hostname;
console.log("Hostname:", hostname);

// Retrieve the query parameters
const searchParams = parsedUrl.query;
console.log("Query Parameters:", searchParams);

// Reformulate the URL with a new hostname
parsedUrl.hostname = "www.laplateforme.io";

// Add a new query parameter
parsedUrl.query += '&newParam=newValue';

// Print the new URL
console.log("New URL:", url.format(parsedUrl));