import axios from 'axios';
import config from '../config/config';

export const NotesService = {
    saveAllNotes
};

function saveAllNotes(apiEndpoint, payload){
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    try {
        console.log("calling save all notes with payload " + payload)
        console.log("url to post " + config.baseUrl + "saveAll/" + apiEndpoint)
        return axios.post(config.baseUrl  + "saveAll/" +apiEndpoint, payload, axiosConfig).then((response)=>{
            return response;
        }).catch((err)=>{
            console.log(err);
        })
    }
    catch (err) {
        console.log(err);
    }
}
