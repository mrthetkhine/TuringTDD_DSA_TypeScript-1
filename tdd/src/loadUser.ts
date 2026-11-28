import axios from "axios";

export default async function loadUser()
{
    let resp = await axios.get('https://api.mydummyapi.com/comments/1');
    return resp.data;
}
async function  api()
{
    let data = await loadUser();
    console.log('data', data);
}
api();