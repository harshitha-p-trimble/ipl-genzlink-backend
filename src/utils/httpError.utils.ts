class HttpError extends Error {
    _statusCode: number;
    _errorDetails: any;
    
    constructor(statusCode: number, _errorDetails: any) {
      super();
      this._statusCode = statusCode;
      this._errorDetails = _errorDetails;
      Error.captureStackTrace(this, this.constructor); 
    }
}

export default HttpError;