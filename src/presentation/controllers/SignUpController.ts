import { HttpRequest, HttpResponse } from './protocols/Http'
import { MissignParamError } from './errors/MissingParamError'
import { badRequest } from '../helpers/HttpHelper'
import { Controller } from './protocols/Controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissignParamError(field))
      }
    }
  }
}
