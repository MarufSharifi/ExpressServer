import "reflect-metadata";
import { Methods } from "./methods";
import { MetadataKeys } from "./MetadataKeys";

function routeBuilder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBuilder(Methods.get);
export const post = routeBuilder(Methods.post);
export const patch = routeBuilder(Methods.patch);
export const del = routeBuilder(Methods.del);
export const put = routeBuilder(Methods.put);
