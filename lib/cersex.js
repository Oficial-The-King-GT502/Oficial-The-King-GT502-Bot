const axios = require('axios')

const cersex = () => {
    return new Promise((resolve, reject) => {
        var url = `https://www.fullxxxvideos.net/wwwxxx/cersex/`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = cersex
