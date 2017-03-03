export class SmartRouterApi {
  constructor(ctm_account_id, ctm_access_key, ctm_secret_key) {
    this.ctm_account_id = ctm_account_id;
    this.ctm_access_key = ctm_access_key;
    this.ctm_secret_key = ctm_secret_key;
  }

  /**
    Gets a list of all smart routers at CTM.
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#c4ec2e1-0525-be58-a8df-bdb8dc254d02
  */
  list_routers() {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/conditional_routers`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let options = {auth: ctm_auth_string, headers: {"Content-Type": 'application/json'}}
    let response = HTTP.get(url, options)
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Gets the JSON definition of a smart router for the given router_id from CTM.
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#dddf8d-6b4e-0f0f-9aa1b0a0119c
    @param router_id The id of the smart router id.
  */
  get_router(router_id) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/conditional_routers/${router_id}`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let options = {auth: ctm_auth_string, headers: {"Content-Type": 'application/json'}}
    let response = HTTP.get(url, options)
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Creates a new smart router in CTM.
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#d38bd9d-3049-256b-ae93-c021474b1c57
    @param smart_router_json The JSON object defining a new smart router.
  */
  create_router(smart_router_json) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/conditional_routers`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let data = smart_router_json;
    let options = {auth: ctm_auth_string, headers: {"Content-Type": 'application/json'}, data: data}
    let response = HTTP.post(url, options)
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Updates an existing smart router in CTM.
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#d305-7b99-9115-7a2b-ee6982bc263d
    @param smart_router_json The JSON Object defining an updated smart router.
    @param router_id the ID of the router to update.
  */
  update_router(smart_router_json, router_id) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/conditional_routers/${router_id}`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let data = smart_router_json;
    let options = {auth: ctm_auth_string, headers:{"Content-Type": 'application/json'}, data: data}
    let response = HTTP.put(url, options);
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Deletes a router in CTM.
    CTM Documenation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#debddd-8f9a-2aa9-9306-abc746580a32
    @param router_id the ID of the router to delete.
  */
  delete_router(router_id) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/conditional_routers/${router_id}`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let options = {auth: ctm_auth_string, headers:{"Content-Type": 'application/json'}}
    let response = HTTP.del(url, options);
    let result = JSON.parse(response.content);
    return result;
  }
}

export { SmartRouterApi as default}
