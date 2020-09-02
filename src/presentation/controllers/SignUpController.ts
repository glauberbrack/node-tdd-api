import { HttpRequest, HttpResponse } from './protocols/Http'
import { MissignParamError } from './errors/MissingParamError'
import { badRequest } from '../helpers/HttpHelper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissignParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissignParamError('email'))
    }
  }
}
