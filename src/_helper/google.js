const { OAuth2Client } = require("google-auth-library")
export default function getuser(){
  
  const client = new OAuth2Client()
  async function verifyToken(token) {
    client.setCredentials({ access_token: token })
    const userinfo = await client.request({
      url: "https://www.googleapis.com/oauth2/v3/userinfo",
    });
    return userinfo.data
  }
  
  verifyToken("ACCESS_TOKEN_FROM_CLIENT_SIDE")
    .then((userInfo) => {
      console.log(userInfo)
    })
    .catch((error) => {
      console.log(error)
    })
}
