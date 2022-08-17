const http = require("http");
const path = require("path");
const fs = require("fs");

async function createLinks() {
  const isFile = (path) => fs.lstatSync(path).isFile();

  http
    .createServer((req, res) => {
      const fullPath = path.join(process.cwd(), req.url);
      if (!fs.existsSync(fullPath)) {
        return res.end("File or directory not found");
      }

      if (isFile(fullPath)) {
        return fs.createReadStream(fullPath).pipe(res);
      }

      let links = "";

      const urlParams = req.url.match(/[\d\w\.]+/gi);

      if (urlParams) {
        urlParams.pop();
        const prevUrl = urlParams.join("/");
        links = urlParams.length
          ? `<li><a href="/${prevUrl}">..</a></li>`
          : '<li><a href="/">..</a></li>';
      }

      fs.readdirSync(fullPath).forEach((fileName) => {
        const filePath = path.join(req.url, fileName);
        links += `<li><a href="${filePath}">${fileName}</a></li>`;
      });
      const HTML = fs
        .readFileSync(path.join(__dirname, "index.html"), "utf-8")
        .replace("LIST", links);
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      return res.end(HTML);
    })
    .listen(3000, () =>
      console.log("Server been started http://localhost:3000")
    );
}

createLinks();
