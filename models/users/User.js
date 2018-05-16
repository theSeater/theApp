class User {
    constructor(data) {
        this.data               = data || {};
        this._updates           = {};
    }

    _set(key, value) {
        console.log(key, value);
        this.data[key]      = value;
    }

    getUserData(){
        console.log('called');
        let data = Object.assign({}, this.data);
        return data;
    }

    getUserName(){
        
    }

    getUserExists() {
        console.log(this.data);
        if(this.data.userExists === undefined || this.data.userExists === null){
            return false;
        } else {
            return this.data.userExists;
        }
    }

    setUserExists(userExists) {        
        this._set('userExists', userExists);
    }

}

module.exports = User;