import { Server, Model, RestSerializer } from "miragejs";

import { categories, products, users } from "./src/db";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
    },

    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", { ...item, cart: [], wishlist: [] })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });
    },
  });
}
