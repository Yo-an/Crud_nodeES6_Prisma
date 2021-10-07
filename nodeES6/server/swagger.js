import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
      title: 'My API',
      description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
  };
  
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server/app.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
    await import('./app'); 
  });
