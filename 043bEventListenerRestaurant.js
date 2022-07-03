const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on('open', () => console.log('The restaurant has been opened.'))
  .on('close', () => console.log('The restaurant has been closed.'))
  .on('tableChange', (change) => {
    tablesCount += change;
    console.log(`${tablesCount} tables left.`);
  });

megaRestaurant.open();

megaRestaurant.takeTableWithoutReservation();

megaRestaurant.takeTableWithoutReservation();

megaRestaurant.reserveTable();

megaRestaurant.cancelTableReservation();

megaRestaurant.reserveTable();

megaRestaurant.reserveTable();

megaRestaurant.takeTableWithoutReservation();

megaRestaurant.takeTableWithoutReservation();

megaRestaurant.cleanupTable();

megaRestaurant.close();
