import { Dropbox } from "dropbox";
import { headers } from "../../../../next.config";

const FILE_NAME = "BolykyTamasDaniel_CV_EN";
const FILE_URL =
  "https://www.dropbox.com/scl/fi/0s9wu96t001jc9bcf85ey/BolykyTamasDaniel_CV_EN.pdf?rlkey=odfxbly5t07ifv4yhyusylf0z&dl=0";
const API_KEY =
  "sl.Bojxp5VVhxhzSEmRkMTnVbBnwnYzklVcVzIYuEQ17OJ3NryOJ6lcr4YAh_1n8v42bIO2Ossuw_3L03A4d2PaBkpTYpRM82DOk6pkKOeQbfyn2N3-DmPtWm2MORw0ivjTHv2PQPZwH62026U";
const fs = require("fs");

export async function GET(req) {
  const dbx = new Dropbox({ accessToken: API_KEY });

  dbx.sharingGetSharedLinkFile({ url: FILE_URL }).then((data) => {
    fs.writeFile(
      FILE_NAME,
      data.result.fileBinary,
      { encoding: "binary" },
      (err) => {
        if (err) {
          throw err;
        }
        console.log(`File: ${FILE_NAME} saved.`);
      }
    );
  });

  return new Response()
}
