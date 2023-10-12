// Enkel tuple
// Definierad array av en specifik längd men också av dess typer...

const rgbColor: [number, number, number] = [255, 0, 255];
// GÖR INTE DETTA!!!
// rgbColor.push(0, 110, 255);
// rgbColor.push(0, 110, 255, 0.5);

type HttpResponse = [number, string];

const okResponse: HttpResponse = [200, 'OK'];
const createdResponse: HttpResponse = [201, 'Created'];
const notFoundResponse: HttpResponse = [404, 'Not Found'];
const badRequistResponse: HttpResponse = [400, 'Bad Request'];

const responses: HttpResponse[] = [
  [200, 'OK'],
  [201, 'Created'],
  [400, 'Bad Request'],
];
