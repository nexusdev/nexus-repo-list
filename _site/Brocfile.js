var autoprefixer = require('broccoli-autoprefixer');
var broccoli = require('broccoli');
var compileSass = require('broccoli-sass');
var execSync = require('exec-sync');
var fs = require('fs');
var injectLivereload = require('broccoli-inject-livereload');
var mapSeries = require('promise-map-series');
var mergeTrees = require('broccoli-merge-trees');
var Writer = require('broccoli-writer');

//
// Jekyll Compiler
//

Jekyll.prototype = Object.create(Writer.prototype);
Jekyll.prototype.constructor = Jekyll;

function Jekyll() {
    var filteredTrees = fs.readdirSync('.').filter(function filter(element) {
        return element !== '_config.yml' &&
            element !== '_site' &&
            element !== 'Brocfile.js' &&
            element !== 'CNAME' &&
            element !== 'Gemfile' &&
            element !== 'Gemfile.lock' &&
            element !== 'Makefile' &&
            element !== 'node_modules' &&
            element !== 'package.json' &&
            element !== 'README.md' &&
            element !== 'tmp' &&
            element[0] !== '.';
    });

    if (!(this instanceof Jekyll)) return new Jekyll(filteredTrees);

    this.inputTrees = filteredTrees;
    this.description = 'Jekyll';
}

Jekyll.prototype.write = function(readTree, destDir) {
    return mapSeries(this.inputTrees, function iterator(tree) {
        return readTree(tree);
    }).then(function onceDone() {
        execSync('bundle exec jekyll build -d ' + destDir);
    });
};

//
// Build
//

var scss = autoprefixer(compileSass(['asset', '_vendor/foundation/scss'], 'app.scss', 'asset/app.css'));
var site = injectLivereload(Jekyll());

module.exports = mergeTrees([site, scss]);
