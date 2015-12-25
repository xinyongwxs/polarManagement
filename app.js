
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , services = require('./services'),
  multer = require('multer');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static('public'));
app.use(multer({ dest: 'uploads/'}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/buildNewTreeNode', services.buildNewTreeNode);
app.get('/menuItems', services.getTreeData);
//app.post('/createOneImagesDataSet', services.createOneImagesDataSet);
app.get('/getAllDataSetNames', services.getAllDataSetNames);
services.uplaodSingleFile(app);
//services.uploadSingleImage(app);
//services.uploadMultipleFiles(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
