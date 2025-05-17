import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://192.168.3.190:8888/auth',
  realm: 'los-local',
  clientId: 'service-public',
})

export default keycloak