import {MetadataSource} from '../fasten/metadata-source';

export class LighthouseSourceMetadata extends MetadataSource {

  authorization_endpoint: string
  token_endpoint: string
  introspection_endpoint: string
  userinfo_endpoint: string
  registration_endpoint: string

  scopes_supported: string[]
  issuer: string
  grant_types_supported: string[]
  response_types_supported: string[]
  response_modes_supported: string[]
  aud: string
  code_challenge_methods_supported: string[]

  api_endpoint_base_url: string
  client_id: string
  redirect_uri: string

  confidential: boolean
  dynamic_client_registration_mode: string
  cors_relay_required: boolean
}
