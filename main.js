/* globals $: true */
'use strict';

$(function() {
  $('.enemies').children().each(function(a, el) {
    $(el).append('<br /><a target="_blank" style="color: #0a0;" href="/leek/'+el.id+'">profil</a>');
    $.get('/leek/'+el.id)
      .success(function(data) {
        var dataset = $(data);
        var kdstats = dataset.find('#fights tr:first > td');
        var kd = kdstats.first().text() / kdstats.last().text();
        var life = dataset.find('#life').text();
        var strength = dataset.find('#force').text();
        $(el).append('<br />k/d: '+kd.toFixed(2)+'<br />L: '+life+' ; S: '+strength)
          .append('<a href="/leek/'+el.id);
      });
  });
});
