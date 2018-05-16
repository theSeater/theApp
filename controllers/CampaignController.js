const CampaignController        = {
    
    test: (req, res, next) => {  
        res.send( {data: 'campaign controller called'} );
    },

    createCampaign: (req, res, next) => {
        res.send( {data: 'create campaign controller called'} );
    },

    getCampaign: (req, res, next) => {
        res.send( {data: 'get campaign controller called'} );
    },

    updateCampaign: (req, res, next) => {
        res.send( {data: 'update campaign controller called'} );
    },

    deleteCampaign: (req, res, next) => {
        res.send( {data: 'delete campaign controller called'} );
    }

}

module.exports.Controller   = CampaignController;

module.exports.controller   = (app) => {
    app.get('/v1/campaign/test', CampaignController.test);

    app.post('/v1/campaign', CampaignController.createCampaign);
    app.get('/v1/campaign', CampaignController.getCampaign);
    app.patch('/v1/campaign', CampaignController.updateCampaign);
    app.delete('/v1/campaign', CampaignController.deleteCampaign);
}