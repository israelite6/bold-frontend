import {
  parseCookies,
  setCookie as setNookiesCookies,
  destroyCookie,
} from "nookies";
import { COOKIE_MAX_AGE } from "../config/constants";

interface SetCookiesParamInterface {
  name: string;
  value: string;
  days?: number;
}

export const setCookie = ({ name, value, days }: SetCookiesParamInterface) => {
  setNookiesCookies(null, name, value, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
};

export const getCookie = (name: string): string | null => {
  const cookie = parseCookies() || {};
  return cookie[name];
};

export const eraseCookie = (name: string): void => {
  destroyCookie(null, name);
};
