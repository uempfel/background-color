# background-color
Simple node server to show incoming requests and visualize multiple instances of a deployment.

### Configuring the background color
The background color can be configured via the environment variable "COLOR". 
Accepted values are all [Web colors](https://en.wikipedia.org/wiki/Web_colors) (e.g. `red`,`orange`, `fuchsia` etc.) and Hex-codes.  
You can also set the value to `random` in order to select a random color.  
If no value is set, the color defaults to white.

### Configuring the port
By default, the server listens on port `8080`.  
You can change the port via the `PORT` environment variable.

### Run it locally
```bash
git clone https://github.com/uempfel/background-color.git
cd background-color
node server.js
```

### Run it as container
```bash
# Run the server with a random color
docker run --rm -e COLOR=random -p 8080:8080 12balu34/background-color:v1.0.0
```
