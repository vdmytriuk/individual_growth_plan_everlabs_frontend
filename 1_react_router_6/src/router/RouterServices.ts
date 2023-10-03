export class RouterServices {
  static toAbsolutePath(path?: string) {
    return `/${path}`;
  }

  static toCurrentPath(path?: string) {
    return `./${path}`;
  }
}
