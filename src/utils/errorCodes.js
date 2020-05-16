export const UNEXPECTED_ERROR_CODE = 0;
export const WRONG_CODE_ERROR_CODE = 1;

export const errorCodeMessageMapper = {
  [undefined]: 'Unexpected error. Pleae, try again',
  [UNEXPECTED_ERROR_CODE]: 'Unexpected error. Pleae, try again',
  [WRONG_CODE_ERROR_CODE]: 'You entered wrong code',
};
