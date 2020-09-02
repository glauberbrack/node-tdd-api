import { HttpRequest, HttpResponse } from './protocols/Http'
import { MissignParamError } from './errors/MissingParamError'
import { badRequest } from '../helpers/HttpHelper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissignParamError(field))
      }
    }
  }
}
