import fs from 'fs';
import swaggerJsdoc from 'swagger-jsdoc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import packageJson from './package.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

const options = {
  format: '.yml',
  definition: {
    openapi: '3.0.0',
    info: {
      title: packageJson.name,
      version: packageJson.version,
    },
  },
  apis: ['./src/routes/*.js', './swagger/**/**.yml'], // './swagger/**/**.yml'] // files containing annotations as above
};

const runtime = async () => {
  try {
    // @TODO: PR to swaggerJsdoc for non-zero exit codes on failure.
    const openapiSpecification = await swaggerJsdoc(options);
    fs.writeFileSync(`${__dirname}/swagger.yml`, openapiSpecification);
  } catch (e) {
    console.log('broke', e);
    process.exit(1);
  }
};

runtime();
