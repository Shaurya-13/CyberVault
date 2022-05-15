import { handleAuth } from '@auth0/nextjs-auth0'
// This API component is responsible for all Auth0 redirects throughout the applicaiton
// It imports all of the hooks and functions that can be referenced and called 
// througout the application provided by Auth0
export default handleAuth()
