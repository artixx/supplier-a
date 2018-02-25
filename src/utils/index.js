export function checkProduction() {
  return process.env.NODE_ENV !== 'production'
}
