const FILE_NAME = "BolykyTamasDaniel_CV_EN.pdf";
const FILE_URL =
  "https://doc-0c-88-docs.googleusercontent.com/docs/securesc/jbo26daunmp2qjgnmbojh2keq98388f9/ak0cam9jafakg2o0be33avvhmh7i0pcd/1698162750000/01454151621411786869/01454151621411786869/1IR4M_YhjBDdO2b-gJ_zeWbTkhgPx8NpX?e=download&ax=AI0foUpbJ9YqLs137wtFi0fMJb3-WnsATaUz1DRcOkCrsTq1qsmjD6MQR4uB7nijF6rNHPfB5WwUsmiZ2L4nxsdr-jnzoPhcq8v9uLfgtzb3IzFvkugQ5cWDelQked0Fg5KjZTZiUzJhnVrr2anWd0vsfC5RB9vDnUrQyrJqDJ_VZFAgMbVEPp_Nnf4zjlS2Knws5Q8reFdXsL-I3qpsnFnCrDvlrKTx9YIlpg8f7ZtIQxB55WZrahGfpeh4ZeDZEiZ9Fq6APYn4-FsrppezkDQIOiVaVbYThtNSrA63Z0MVObXymXO4fAls1ZoAfcmFcOos6zwr7xjjJOefIHrniKJ9sVMskaePvurrAnrk22WsK0x3WBQUMLFtWmkuYLmeTH8hAiHTnTeSdrnul1R3qgI4qDsw_mAuvi_Xvmd_3tfrrJ0xJnef16tVLPnefInu6JI4R5wC_hmevPKE9AqaaPXyX4s0DNkSIIVbwfMIZUk36N2cRwFnAzLqxwpxqtOiPemCM22yz9qvIFY4I37FobkPkoM9pXuHCmFBetN-MnXGY5QyBaukfvzHrtvOoECi6HoiOVrK2zk-5JBpaV4egPShexvO7H5ovDjD3v9KXKch9-cdMCJnNCXvYYbnQ7BAgVhAEbRgc2jroSFPGvxX9nWTYyWFhzEwdXgMvwxqgSSURh7KiSdz9N7bR6HTdX_aRkCUtYdxlcF-K-SxhacLdDLB08HhbVg5wcjmgkB3DTDlDv_3n_fsqKW8kt5EdgmjdRnhDIZ6Ir0KJGNXehmxDJQ4XW45FLqiX1xizq_PZnPMqmIzGW0d6eP-metJ-Vx6bqoW8bYiEoDCwGKEVPKi3mHazdGUUasgX2ey4dkTq0e3LhIHhUupTzcL0TG6o9ojtW-qQDnkzOsV6qhAivX0qPfEGCu2HqwiqsUaldhdVkKMByk7hOjrZp_jdjkTekZyv62jeHNJvg&uuid=71ad9891-9f39-4b5c-a71f-3c7536a3bd97&authuser=0&nonce=40h0h1m4f50fs&user=01454151621411786869&hash=c2tbf05d7oj3r22rk56lvn4cb0h869ut";

export async function GET(req) {
  const response = await fetch(FILE_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${FILE_NAME}"`,
    },
  });
}
