export async function GET() {
  const FILE_NAME = "BolykyTamasDaniel_CV_EN.pdf";
  const FILE_URL =
    "https://cdn.discordapp.com/attachments/648573682368643072/1168182417815773225/BolykyTamasDaniel_CV_EN.pdf?ex=6550d5a8&is=653e60a8&hm=d8193a2a149cf85ba521bf8fcf1b2857ef34ccd4f324994791f40cbd01a2ac17&";

  const response = await fetch(FILE_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${FILE_NAME}"`,
    },
  });
}
