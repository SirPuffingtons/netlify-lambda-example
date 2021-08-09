const axios = require('axios')

exports.handler = (event, context, callback) => {

    const URL = `${process.env.API_URL}?client_id=${process.env.API_CLIENT_ID}&client_secret=${process.env.API_CLIENT_SECRET}`

    // Send user response
    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }

    // Perform API call to GitHub
    const getUsers = async () => {
        try {
            const res = await axios.get(URL)
            send(res.data)
        }
        catch(err) { console.log(err) }
    }

    // Ensure method is GET
    if(event.httpMethod === 'GET') getUsers()
}