import axios from "axios"


const BASEURL = "https://api.dhan.co/trades"

const getDhanOrders = (trades:boolean, orders:boolean, orderId:any) =>{
let endPoint = ''

if (trades){
    endPoint="/trades"
}else if (orders){
    endPoint="/orders"
}else if(orderId){
    endPoint=`/orders/${orderId}`
}
try {
    const response = await axios.get(`${BASE_URL}${endPoint}`, {
        headers: {
            "Content-Type": "application/json",
            "access-token": ACCESS_TOKEN
        }
    });

    console.log(`Response from ${endPoint}:`, response.data);
    return response.data;
} catch (error) {
    console.error(`Error fetching data from ${endPoint}:`, error);
    throw error;
}
}

const dhanOperations:any={
    getDhanOrders
}
export default dhanOperations