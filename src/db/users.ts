import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "avinash",
    lastName: "prajapati",
    email: "test@gmail.com",
    password: "test",
    createdAt: dayjs().format("YYYY-MM-DDTHH:mm:ssZ"),
    updatedAt: dayjs().format("YYYY-MM-DDTHH:mm:ssZ"),
  },
];
