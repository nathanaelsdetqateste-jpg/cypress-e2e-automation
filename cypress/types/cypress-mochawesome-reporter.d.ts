declare module "cypress-mochawesome-reporter/plugin.js" {
  const plugin: (
    on: Cypress.PluginEvents,
    config?: Cypress.PluginConfigOptions,
  ) => void;
  export default plugin;
}
