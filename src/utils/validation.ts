import isEmail from "validator/lib/isEmail";

export const isValidEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your email address"));
  } else {
    if (!isEmail(value)) {
      callback(new Error("Please enter a valid email address"));
    }
    callback();
  }
};
