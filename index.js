const axios = require('axios');
const querystring = require('querystring');


class Bkam {
    constructor(config){
        (this.currency_key = config.currency_key),
        (this.bonds_key = config.bonds_key),
        (this.basePath = 'https://api.centralbankofmorocco.ma');
    }

    request(service = '', options = {}) {

        const url = this.basePath + service;

        if (options.api_type === 'BDT') {
            if (this.bonds_key === undefined) this.bonds_key = "";
            var headers = {headers: {
                'Ocp-Apim-Subscription-Key': this.bonds_key,
                'Content-type': 'application/json'
            }}
        } else {
            if (this.currency_key === undefined) this.currency_key = "";
            var headers = {headers: {
                'Ocp-Apim-Subscription-Key': this.currency_key,
                'Content-type': 'application/json'
            }}
        }
        

        const config = {
            url,
            ...options,
            ...headers
        };

    
        return axios.request(config).then(r => {
            if (r.status === 200) {
                return r.data
            }
        }).catch(err => {
            if (err.response.status === 401){
                return {message: 'Make sure you added a correct API key for each service'}
            } else {
                return {message: 'error occurred'}
            }
        })
    };

    getCoursBBE(options) {
        const qs = options ? '?' + querystring.stringify(options) : '';

        const url = '/cours/Version1/api/CoursBBE' + qs;
        const config = {
            method: 'GET'
        };
        
        return this.request(url, config);
    }

    getCoursVIR(options) {
        const qs = options ? '?' + querystring.stringify(options) : '';

        const url = '/cours/Version1/api/CoursVirement' + qs;
        const config = {
            method: 'GET'
        };
        return this.request(url, config);
    }

    getCourbeBDT(options) {
        const qs = options ? '?' + querystring.stringify(options) : '';

        const url = '/mo/Version1/api/CourbeBDT' + qs;
        const config = {
            method: 'GET',
            api_type: 'BDT'
        };
        return this.request(url, config);
    }

}

module.exports = Bkam;
