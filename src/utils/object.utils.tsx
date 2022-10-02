class ObjectUtils {
  static valuesToArray = (object: Object) => {
    let values: String[] = [];
    Object.values(object).map((value) => {
      values.push(value);
    });
    return values;
  };
}

export { ObjectUtils };
