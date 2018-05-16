class Campaign {
    
    constructor(data) {
        this.data               = data || {};
        this._updates           = {};
    }

    _set(key, value) {
        console.log(key, value);
        this.data[key]      = value;
    }

}

module.exports = Campaign;