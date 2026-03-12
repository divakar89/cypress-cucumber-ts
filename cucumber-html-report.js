const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/cucumber_report.json',
  output: 'cypress/reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
});