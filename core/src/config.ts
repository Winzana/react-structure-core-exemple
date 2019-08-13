/**
 * Config class
 *
 * @export
 * @class Config
 */
export default class Config {
  /**
   * Singleton instance
   */
  private static instance?: Config;

  /**
   * Memver isDevMode
   */
  private devMode: boolean = true;

  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    Config.instance = this;
  }

  /**
   * Methode to get a config instance
   */
  public static getInstance() {
    if (Config.instance == null) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  /**
   * Enable development mode for core
   *
   * @param {boolean} devMode
   * @memberof Config
   */
  public setDevMode(devMode: boolean) {
    this.devMode = devMode;
  }

  /**
   * Getter for devmode
   */
  public isDevMode() {
    return this.devMode;
  }
}
