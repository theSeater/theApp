class Model {
    constructor(data) {
        this.data               = data || {};
        this._updates           = {};
    }

    _set(key, value) {
        console.log(key, value);
        this.data[key]      = value;
    }

    save() {
        console.log('save');
    }

}

module.exports = Model;