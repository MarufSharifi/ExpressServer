import "reflect-metadata";
function routeBuilder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
    };
  };
}

export const get = routeBuilder("get");
export const post = routeBuilder("post");
export const patch = routeBuilder("patch");
export const del = routeBuilder("delete");
export const put = routeBuilder("put");
