var Promise = require('bluebird')

var colorModule = {
  models : require("./models"),
  theme : {
    directory : 'public',
    index : "/color/index",
    mock : {},
    locals : {}
  },
  acl : {
    roles : {
        "loggedIn" : function(req){
            return req.session.user.id !== undefined
        }
    },
    routes : {
        "GET /color/index" : [{
            role : 'loggedIn',
            redirect : '/color/login'
        }]
    }
  }
}

module.exports = colorModule
