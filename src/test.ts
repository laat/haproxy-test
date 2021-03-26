import http from "http";

const agent = new http.Agent({ keepAlive: true });
// lager 100 samtidige requests
Array(100)
  .fill(0)
  .forEach(() => {
    http
      .get("http://localhost:8080/ping", { agent }, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });
        resp.on("end", () => {
          console.log(data);
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  });
