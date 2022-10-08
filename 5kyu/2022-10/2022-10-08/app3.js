/* 

### Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string


### Example

url = "http://github.com/carbonfive/raygun" -> domain name = "github"
url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
url = "https://www.cnet.com"                -> domain name = cnet"


### ANSWER

*/

function domainName(url) {
  return url.replace(/.*\/{2}|w{3}\.|(?<=\w+)\..+/g, "");
}
