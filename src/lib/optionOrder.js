export const stableHash = (value) => {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 2246822507);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 3266489909);
  return (hash ^ (hash >>> 16)) >>> 0;
};

export const orderSituationOptions = (question) => [...question.options]
  .sort((a, b) => stableHash(`${question.id}:${a.id}`) - stableHash(`${question.id}:${b.id}`));
