import instance from './service.interceptor'

const api = process.env.REACT_APP_BACKEND

class ContactService {
  static createContactTenant (formData) {
    return instance.post(`${api}/api/v1/tenants/contact/create`, formData)
  };

}

export default ContactService