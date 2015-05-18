var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('react');
var Lists = require('./lists.jsx');

React.render(
    <Lists />,
    document.getElementById('example')
);