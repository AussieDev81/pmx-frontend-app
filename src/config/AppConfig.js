
class AppConfig {
  static APP_NAME = "PMX Kids";

  static cryptoEndpoints = [
    { method: "all", url: "http://localhost:8080/pmx/v1/crypto/all" },
    { method: "fakes", url: "http://localhost:8080/pmx/v1/crypto/fakes" },
    { method: "distinct", url: "http://localhost:8080/pmx/v1/crypto/distinct" },
  ];

  static accountEndpoints = [
    { method: "", url: "http://localhost:8080/pmx/v1/account" }, //needs account id as param
    { method: "all", url: "http://localhost:8080/pmx/v1/account/all" },
    { method: "child", url: "http://localhost:8080/pmx/v1/account/child" }, //needs account balances in the request body
    { method: "parent", url: "http://localhost:8080/pmx/v1/account/parent" }, //needs account balances in the request body
    { method: "deactivate", url: "http://localhost:8080/pmx/v1/account/deactivate" }, //needs account id as a param
  ];

  static transactionEndpoints = [
    { method: "", url: "http://localhost:8080/pmx/v1/transactions" },//needs an id
    { method: "payment", url: "http://localhost:8080/pmx/v1/transactions/payment" }//needs a payment object in the request body
  ];

}


export default AppConfig;