import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'

class ProfileService {
  async getProfile() {
    try {
      const res = await api.get('http://localhost:3000/profile')
      ProxyState.profile = res.data
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const profileService = new ProfileService()