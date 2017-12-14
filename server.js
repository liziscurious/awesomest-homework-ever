const express        = require( 'express' ),
      mongoose       = require( 'mongoose' ),
      port           = 3000 || process.env.PORT,
      app            = express(),
      db             = mongoose.connection;

mongoose.Promise   = global.Promise;
const mongoURI  = 'mongodb://localhost/super-cool-homework';

// Connect to Mongo
mongoose.connect ( mongoURI , { useMongoClient: true});

// Error / success
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'mongo connected: ', mongoURI ));
db.on( 'disconnected', () => console.log( 'mongo disconnected' ));

// open the connection to mongo
db.on( 'open' , ()=>{
  console.log('Connection made!');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// var wbinfoController = require( './controllers/wbinfoController' );

// app.use( '/wbinfo', wbinfoController );

app.use( express.static( 'public' ));

app.get('/', (req, res) => {
  res.send('hello world!');
})

app.listen( port, () => {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
