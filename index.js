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
            return req.session.user.id
        },
        "isInstaller" : function(req){
            return colorModule.dep.model.models.user.find({limit:1}).then(function(users){
                if( users.length ){
                    return Promise.reject()
                }
                return true
            })
        }
    },
    routes : {
        "GET /color/index" : [{
            role : 'loggedIn',
            redirect : '/color/login'
        }],
        "GET /color/install" : ['isInstaller']
    }
  }
}

module.exports = colorModule
