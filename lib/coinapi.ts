export const fetchAPI = async (path: String) => {
    const baseLink = "https://rest.coinapi.io";
    const _path = path;
    const apiKey = "?apikey=" + process.env.API_KEY;

    const link = baseLink + _path + apiKey;
    const res = await fetch(link);
    const data = await res.json();
    return data;
};
