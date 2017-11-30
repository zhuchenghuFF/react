import axios from 'axios';
export default class Http{
	static get(params){
		const apiToken = "api_token=" + localStorage.api_token || "";
		let url = params.url + "?";
		for (var key of Object.keys(params.param)) {
		  url = url + key + "=" + params.param[key] + "&";
		}
		url += apiToken;

		return axios({
		  url:url,
		  method: 'get',
		  headers: {
		     'Content-Type': 'application/json'
		    },
		}).then(function (response) {
	        return response;
      })
	}
	static post(params){
		return axios({
		  url: params.url,
		  method: 'post',
		  data: params.param,
		  headers: {
		     'Content-Type': 'application/json'
		    },
		}).then(function (response) {
        return response;
      })
	}
}
