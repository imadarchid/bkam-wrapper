# bkam-wrapper

> A Node.js wrapper for Bank Al-Maghrib's API

This might help you get data from BKAM's API in your node.js apps easily. Make sure to register on the [Developer's portal](https://apihelpdesk.centralbankofmorocco.ma/) to get access to your API keys & take a look at the documentation.

For now only two products are offered: Currency Exchange Rates & Treasury Bonds reference interest rates

## Install

[npm][]:

```sh
npm install bkam-wrapper
```

## Usage

```js
const bkamWrapper = require('bkam-wrapper');

// Include your API keys from BKAM developer account
const getData = new bkamWrapper({
    currency_key: YOUR_CURRENCY_KEY,
    bonds_key: YOUR_BONDS_KEY
})

```

### Methods
- **Getting currency exchange rates - Banknotes**

```js

getData.getCoursBBE(options)

```
options: libDevise: _String_, optional | date: _String_, optional

- **Getting currency exchange rates - Transfers**

```js

getData.getCoursVIR(options)

```
options: libDevise: _String_, optional | date: _String_, optional

- **Getting reference interest rate of TBs data**

```js

getData.getCourbeBDT(options)

```
options: dateCourbe: _String_, optional


## Contribute & Future Work
You're welcome to contribute or open issues to improve the code! It should be easy to adapt this project if new products are offered by Bank Al Maghrib's API. 

_P.S: I am still learning, feel free to contact me if something needs to be improved in the project!_
