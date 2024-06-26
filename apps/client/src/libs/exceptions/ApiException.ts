import type { ApiErrorScheme } from '@/libs/exceptions';

class ApiException<ErrorCode = number> extends Error {
  declare code: ErrorCode;

  constructor(data: ApiErrorScheme, code: ErrorCode) {
    super(data['message']);
    this.name = 'ApiException';
    this.code = code;
  }
}

export default ApiException;
