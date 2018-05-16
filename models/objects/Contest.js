const Model                     = require('../Model');

class Contest extends Model {
    
    constructor(data) {
        super(data);
    }

    _set(key, value) {
        console.log(key, value);
        this.data[key]      = value;
    }

}

module.exports = Contest;