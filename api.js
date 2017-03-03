import { SmartRouterApi } from './smart_router/SmartRouterApi.js'
import { VoiceMenuApi } from './voice_menu/VoiceMenuApi.js'

export default class CTM {
  constructor(ctm_account_id, ctm_access_key, ctm_secret_key) {
    this.ctm_account_id = ctm_account_id;
    this.ctm_access_key = ctm_access_key;
    this.ctm_secret_key = ctm_secret_key;
    this.SmartRouter = new SmartRouterApi(this.ctm_account_id, this.ctm_access_key, this.ctm_secret_key);
    this.VoiceMenuApi = new VoiceMenuApi(this.ctm_account_id, this.ctm_access_key, this.ctm_secret_key);
  }
}
