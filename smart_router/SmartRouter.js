/*export default class SmartRouter {

  /**
    Create a new SmartRouter object for CRUD operations on a SmartRouter.
    A new SmartRouter object can be created by using this Class's static functions
    to pull required information from a mongo instance.

    @param router_id The id of the router in call tracking metrics.
    @param account_id The call tracking metrics account id.
    @param ctm_access_key The API access key for the specified account id.
    @param ctm_secret_key The API secret key for the specified account id.
    @example
      let my_smart_router = new SmartRouter("smartrouterid", 123456, "apiaccesskey", "apisecretkey");

  constructor(router_id, account_id, ctm_access_key, ctm_secret_key) {
    this.smart_router_api = new SmartRouterApi(ctm_account_id, ctm_access_key, ctm_secret_key)
  }

  /**
    Constructs a new SmartRouter object by fetching router details from MongoDB.

    @param mongo_id The _id of the mongo record to fetch to pull in router details.

  static from_mongo: function(mongo_id) {

  }
}*/
