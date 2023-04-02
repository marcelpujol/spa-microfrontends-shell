import { registerApplication, start } from 'single-spa';

registerApplication(
    'meteo',
    () => System.import('@tengo-ruta/meteo'),
    location => location.pathname.startsWith('/meteo')
);

registerApplication(
    'water',
    () => System.import('@tengo-ruta/water'),
    location => location.pathname.startsWith('/water')
)

start();