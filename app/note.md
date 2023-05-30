// const clientId = "1000.13JDNHV3QR0FK1396Z73ZZ9MCXUCLT";
// const clientSecret = "650e2e270e7b6a8c46454012edadb0009485d89eaa";
// const refreshToken =
// "1000.519f4744dbd764bde4fe8d750b30dc8c.c050d360cd070ffc245cab45ba39ca61";
// // Thông tin module
// const moduleName = "Leads"; // Tên module muốn lấy thông tin
// const apiUrl = "https://www.zohoapis.com/crm/v3"; // API endpoint
async function getAccessToken() {
console.log(" Day alf banm beqn scrip");
const response = await axios.post(
"https://accounts.zoho.com/oauth/v2/token",
null,
{
params: {
grant_type: "refresh_token",
client_id: clientId,
client_secret: clientSecret,
refresh_token: refreshToken,
},
}
);
}
// console.log(response);
// return response.data.access_token;
// }

// <script>
// getAccessToken();
// document.querySelector("#myButton").addEventListener("click", () => {
// console.log("btn");
// getAccessToken();
// });
// </script>
const ZCRMRestClient = require("zcrmsdk");

const config = {
client_id: "1000.13JDNHV3QR0FK1396Z73ZZ9MCXUCLT",
client_secret: "650e2e270e7b6a8c46454012edadb0009485d89eaa",
redirect_uri: "https://example/yourcallback",
refresh_token:
"1000.c43f68947ce650fb5292b434fac574b8.71aedaf7da62c7305e384871167fdbef",
};

// const zohoClient = ZCRMRestClient.initialize(config);

// async function getLeads() {
// try {
// const leadsModule = zohoClient.API.MODULES.get("Leads");
// const response = await leadsModule.getAllRecords();
// const leads = response.data.data;
// // Xử lý dữ liệu leads ở đây
// console.log(leads);
// } catch (error) {
// console.error("Lỗi khi lấy dữ liệu Leads:", error);
// }
// }

// getLeads();
