(function() {
  'use strict';

  var FIRST_OPTION = 0;
  var SECOND_OPTION = 1;

  var options = [
    {
      'title': 'Do you drink Soylent at least four times a day?',
      'description': 'Soylent is a healthy nutritious and tasty (debatable) treat loved by one faction of tech moguls.',
      'first': { 'correct': true, 'name': 'Yes' },
      'second': { 'correct': false, 'name': 'No' }
    },
    {
      'title': 'Are you part of Hackathon Hackers?',
      'description': 'Hackathon Hackers is a place for hackers to receive information about upcoming work-for-free events',
      'first': { 'correct': true, 'name': 'Yes, bro.' },
      'second': { 'correct': false, 'name': 'No, bro.' }
    }
  ];

  var log = [];

  var index = 0;

  function done() {
    return index > options.length - 1;
  }

  function option(i) {
    if (done()) {
      return undefined;
    }

    if (i === FIRST_OPTION) {
      return options[index].first;
    } else if (i === SECOND_OPTION) {
      return options[index].second;
    } 

    console.log('pls stahp. you are not the they.');

    return undefined;
  }

  function mark() {
    for (var i = 0; i < log.length; i++) {
      $('#marks').append('<li>' + log[i] + '</li>');
    }
  }

  function clickOption(option) {
    var msg = 'You got \'' + options[index].title + '\' ';
    if (option.correct) {
      msg += 'right';
    } else {
      msg += 'wrong';
    }
    msg += '!';
    log.push(msg);

    index++;

    if (done()) {
      console.log('making this shit');
      console.log('going to show socres now');

      $('#results').show();
      $('#questions').hide();

      mark();

      return;
    }

    set();
  }

  function set() {
    $('#title').text(options[index].title);
    $('#description').text(options[index].description);

    $('#option-1').text(options[index].first.name);
    $('#option-2').text(options[index].second.name);
  }

  $(document).ready(function() {
    $('#results').hide();

    $('#option-1').click(function() {
      clickOption(option(FIRST_OPTION))
    });

    $('#option-2').click(function() {
      clickOption(option(SECOND_OPTION));
    });
  });

  set(index);
}());
