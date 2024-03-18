# Cat Facts Fetcher

This script fetches random cat facts from the [Cat Facts API](https://cat-fact.herokuapp.com/facts) and displays them on a web page.

## Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/therealmaduanusi/Cat-facts.git

2. Navigate to the project directory:

    ```bash
    cd your-repository

## Code Explanation:
** This JavaScript code snippet demonstrates the usage of the Fetch API to fetch random cat facts from the Cat Facts API asynchronously. It displays a random fact when the page loads and updates the fact each time the button is clicked. **

1. index.html: HTML file containing the script tag to include the JavaScript code and the button element to trigger fetching new facts.
script.js: JavaScript file containing the code to fetch and display cat facts

2. cats(paths): An asynchronous function that fetches data from the specified URL (paths), selects a random fact from the response data, and updates the text content of the demo element with the random fact.

3. btn.addEventListener: Event listener for the button click, which triggers the cats function to fetch and display a new random cat fact.
Initial call to cats function to display a random cat fact when the page loads.

> [!NOTE]
> Internet is necessary and CSS file not available