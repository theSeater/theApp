let			db;
let			mongoose 					    = require('mongoose');
const 		ObjectId 						= mongoose.Schema.Types.ObjectId;

AllSchemas								    = function(db)
{
    this.db		    					    = db;
    
	UserSchema								= new mongoose.Schema({		
		user								: {type: String, default: null, required: true, unique: true },
		pass								: {type: String, default: null, required: true},
		profileComplete						: {type: Boolean, default: true},
		created 							: {type: Date, default: Date.now()},
	},{collection: 'users'});
	User 									= db.model('users', UserSchema);

	UserProfileSchema						= new mongoose.Schema({
		userId								: {type: ObjectId, default:null, required: true},
		first								: {type: String, default: null, required: true},
		last 								: {type: String, default: null, required: true},
		type								: {type: String, default: null, required: true},
	},{collection: 'userProfiles'});
	UserProfile 							= db.model('userProfiles', UserProfileSchema);

	ClientSchema							= new mongoose.Schema({

	},{collecton: 'clientProfiles'});
	Contest 								= db.model('clientProfiles', ClientSchema);
	
	ContestSchema							= new mongoose.Schema({

	},{'collection':'contests'});
	Contest 								= db.model('contest', ContestSchema);

	RedirectSchema							= new mongoose.Schema({
		contestId							: {type: ObjectId, default:null, required: true},
		target								: {type: String, default: null, required: true},
		created 							: {type: Date, default: Date.now()},
		isLive 								: {type: Boolean, default: true},
		isLocal								: {type: Boolean, default: true}
	},{collecton: 'redirects'});
	Redirect 								= db.model('redirects', RedirectSchema);

};

exports.AllSchemas						    = AllSchemas;