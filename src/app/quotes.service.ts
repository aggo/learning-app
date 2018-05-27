import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class QuotesService {
  public bookSelected: EventEmitter<string> = new EventEmitter<string>();

}
