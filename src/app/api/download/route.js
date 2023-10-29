const FILE_NAME = "BolykyTamasDaniel_CV_EN.pdf";
const FILE_URL =
  "https://drive.usercontent.google.com/download?id=1IR4M_YhjBDdO2b-gJ_zeWbTkhgPx8NpX&export=download&authuser=0&confirm=t";

export async function GET() {
  // use fetch to get a response
  const response = await fetch(FILE_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${FILE_NAME}"`,
    },
  });
}
