import jsCookie from "js-cookie"

export const setSession = (key, value) => {
  jsCookie.set(key, value)
}

export const getSession = (key) => {
  return jsCookie.get(key)
}