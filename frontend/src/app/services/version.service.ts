import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private _version:any;
  private _displayEnvironmentWarning:any;
  private _environmentWarningText:any;

  constructor(
    private titleService: Title
  ) { }

  get title() {
    return this._version ? `Suprimentos | ${this._version}` : 'Suprimentos';
  }

  get version() {
    return this._version;
  }

  set version(value) {
    this._version = value;
  }

  get displayEnvironmentWarning() {
    return this._displayEnvironmentWarning;
  }

  set displayEnvironmentWarning(value) {
    this._displayEnvironmentWarning = value;
  }

  get environmentWarningText() {
    return this._environmentWarningText;
  }

  set environmentWarningText(value) {
    this._environmentWarningText = value;
  }

}
