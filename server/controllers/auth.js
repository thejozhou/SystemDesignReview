const jwt = require('jwt-simple');

const auth = {
    login: function(req, res) {

        const username = req.body.username || '';
        const password = req.body.password || '';

        if(username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }
        
        const dbUserObj = auth.validate(username, password);

        if (!dbUserObj) {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        if (dbUserObj) {
            res.json(getToken(dbUserObj));
        },

    validate: function(username, password) {
        const dbUserObj = {
            name: 'thejozhou',
            
        }
    }
    }
}