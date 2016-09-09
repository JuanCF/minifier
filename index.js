var prompt = require('prompt'),
	ProgressBar = require('progress'),
	sh = require('shelljs');

/*var bar = new ProgressBar(' [:bar] :percent', {
	total: 10,
	complete: '|',
	incomplete: ' ',
    width: 20,
	renderThrottle: 5
});

var timer = setInterval(function () {
	bar.tick();
	if (bar.complete) {
		console.log('\ncomplete\n');
		clearInterval(timer);
	}
}, 1000);*/
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['Source', 'Dest'], function (err, result) {
	//
	// Log the results.
	//
	/*console.log('Command-line input received:');
	console.log('  username: ' + result.Source);
	console.log('  email: ' + result.Dest);*/
	sh.exec('gulp copyFiles --source='+result.Source+' '+'--dest='+result.Dest, function (code, output) {});
	//process.exit(0);
});
