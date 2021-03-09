# ms-acme-openapi-ajv

Article Link:
https://gem-ini.medium.com/de-duping-the-duplication-in-services-featuring-swagger-openapi-and-ajv-abd22c8c764e


The purpose of ths repo is to be an aide for the medium article. The code in
this repo does not represent production-quality code, as such the individual
code-sample should be taken with a grain of salt, but the pattern itself is
what should be inspected.

## The Pattern

This repo shows you how to co-locate your swagger docs with your express route
files. With this co-location we go into having a pre-commit hook to generate
the swagger output. This swagger output will then become the validation file
that will protect your express routes (see article for more details)
