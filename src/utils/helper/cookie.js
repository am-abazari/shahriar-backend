const setCookie = (res, key, value, maxAge = undefined) => {
  res.cookie(key, value, {
    secure: true,
    sameSite: "strict",
    httpOnly: true,
    maxAge,
  });
};

const getCookie = (req, key) => {
  return req?.cookies?.[key];
};

const clearCookie = (res, key) => {
  res.clearCookie(key);
};
module.exports = { setCookie, getCookie, clearCookie };
