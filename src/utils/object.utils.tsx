class ObjectUtils {
  /**
   * Convert object keys to an array of string
   *
   * @param object
   * @returns String[]
   */
  static keysToArray = (object: Object) => {
    let values: String[] = [];
    Object.values(object).map((value) => {
      values.push(value);
    });
    return values;
  };

  /**
   * Convert object values to an array of string
   *
   * @param object
   * @returns String[]
   */
  static valuesToArray = (object: Object) => {
    let values: String[] = [];
    Object.values(object).map((value) => {
      values.push(value);
    });
    return values;
  };
}

export { ObjectUtils };
