const typeMatches = (value, type) => {
  if (type === 'null') return value === null;
  if (type === 'array') return Array.isArray(value);
  if (type === 'object') return value !== null && typeof value === 'object' && !Array.isArray(value);
  if (type === 'integer') return Number.isInteger(value);
  if (type === 'number') return typeof value === 'number' && Number.isFinite(value);
  return typeof value === type;
};

const pointer = (root, ref) => {
  if (!ref.startsWith('#/')) throw new Error(`Only local JSON Schema refs are supported: ${ref}`);
  return ref.slice(2).split('/').reduce((value, part) => value?.[part.replaceAll('~1', '/').replaceAll('~0', '~')], root);
};

export function validateJsonSchema(value, schema, root = schema, path = '$') {
  const errors = [];
  const validate = (current, rule, currentPath) => {
    if (!rule || typeof rule !== 'object') return [];
    if (rule.$ref) return validate(current, pointer(root, rule.$ref), currentPath);
    const local = [];
    const types = rule.type == null ? [] : (Array.isArray(rule.type) ? rule.type : [rule.type]);
    if (types.length && !types.some(type => typeMatches(current, type))) {
      local.push(`${currentPath}: expected ${types.join('|')}`);
      return local;
    }
    if (rule.enum && !rule.enum.some(item => Object.is(item, current))) local.push(`${currentPath}: value is not in enum`);
    if (typeof current === 'number' && rule.minimum != null && current < rule.minimum) local.push(`${currentPath}: minimum is ${rule.minimum}`);
    if (typeof current === 'string') {
      if (rule.minLength != null && current.length < rule.minLength) local.push(`${currentPath}: minLength is ${rule.minLength}`);
      if (rule.pattern && !(new RegExp(rule.pattern).test(current))) local.push(`${currentPath}: does not match ${rule.pattern}`);
    }
    if (Array.isArray(current)) {
      if (rule.minItems != null && current.length < rule.minItems) local.push(`${currentPath}: minItems is ${rule.minItems}`);
      if (rule.items) current.forEach((item, index) => local.push(...validate(item, rule.items, `${currentPath}[${index}]`)));
    }
    if (current !== null && typeof current === 'object' && !Array.isArray(current)) {
      const keys = Object.keys(current);
      if (rule.minProperties != null && keys.length < rule.minProperties) local.push(`${currentPath}: minProperties is ${rule.minProperties}`);
      for (const required of rule.required || []) if (!(required in current)) local.push(`${currentPath}: missing required property ${required}`);
      for (const [key, child] of Object.entries(current)) {
        if (rule.properties?.[key]) local.push(...validate(child, rule.properties[key], `${currentPath}.${key}`));
        else if (rule.additionalProperties === false) local.push(`${currentPath}: unexpected property ${key}`);
        else if (rule.additionalProperties && typeof rule.additionalProperties === 'object') local.push(...validate(child, rule.additionalProperties, `${currentPath}.${key}`));
      }
    }
    if (rule.not && validate(current, rule.not, currentPath).length === 0) local.push(`${currentPath}: matches forbidden schema`);
    if (rule.oneOf) {
      const matches = rule.oneOf.filter(option => validate(current, option, currentPath).length === 0).length;
      if (matches !== 1) local.push(`${currentPath}: expected exactly one oneOf branch, matched ${matches}`);
    }
    return local;
  };
  errors.push(...validate(value, schema, path));
  return errors;
}
