export async function GET() {
  const FILE_NAME = "BolykyTamasDaniel_CV_EN.pdf";
  const FILE_URL =
    "https://cdn.discordapp.com/attachments/967048761253695609/1170072332996444300/BolykyTamasDaniel_CV_EN.pdf?ex=6557b5c7&is=654540c7&hm=bd3fcbaf3462e2870c348d1b280320b6464d3b1f7fa53ec9730840e733244e81&";

  const response = await fetch(FILE_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${FILE_NAME}"`,
    },
  });
}
