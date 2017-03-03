export class VoiceMenuApi {
  constructor(ctm_account_id, ctm_access_key, ctm_secret_key) {
    this.ctm_account_id = ctm_account_id;
    this.ctm_access_key = ctm_access_key;
    this.ctm_secret_key = ctm_secret_key;
  }

  /**
    Lists all voice menus for this account.
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#d8f013-2af2-eaa4-00dd-925996c0c7ce
  */
  list_voice_menus() {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/voice_menus`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let options = {auth: ctm_auth_string, headers:{"Content-Type": 'application/json'}}
    let response = HTTP.get(url, options)
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Gets the JSON for a specific voice menu on this account
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#a765-fe28-9631-288c-5a441e926a6b
    @param voice_menu_id The ID of the voice menu to fetch.
  */
  get_voice_menu(voice_menu_id) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/voice_menus/${voice_menu_id}`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let options = {auth: ctm_auth_string, headers:{"Content-Type": 'application/json'}}
    let response = HTTP.get(url, options)
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Creates a new voice menu in CTM for this account.
    CTM Documentation: https://documenter.getpostman.com/view/213868/ctm-api/2FxGgg/#d29fbca-ffee-5646-4d5e-e278701bfb96
    @param voice_menu_json The JSON describing a voice menu to be created
  */
  create_voice_menu(voice_menu_json) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/voice_menus`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let data = voice_menu_json;
    let options = {auth: ctm_auth_string, headers:{"Content-Type": 'application/json'}, data: data}
    let response = HTTP.post(url, options)
    let result = JSON.parse(response.content);
    return result;
  }

  /**
    Deletes a voice menu on CTM for this account.
    @param voice_menu_id The ID of the router to delete.
  */
  delete_voice_menu(voice_menu_id) {
    let url = `https://api.calltrackingmetrics.com/api/v1/accounts/${this.ctm_account_id}/voice_menus/${voice_menu_id}`
    let ctm_auth_string = `${this.ctm_access_key}:${this.ctm_secret_key}`;
    let options = {auth: ctm_auth_string, headers:{"Content-Type": 'application/json'}}
    let response = HTTP.del(url, options)
    let result = JSON.parse(response.content);
    return result;
  }
}

export { VoiceMenuApi as default }
