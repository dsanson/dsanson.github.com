// Site Config

Terminal.config.sitename = "davidsanson.com";
Terminal.config.gui = "http://davidsanson.com";
Terminal.config.clidir = "tty";
Terminal.config.redirect = "http://google.com";

// Useful functions

function pathToString(path) {
	var	pathstring = path.join('/');
	return pathstring;
}

function stringToPath(pathstring) {
	if (pathstring.search(/^\//) != -1) {
		path = pathstring.split("/");
	} else {
	    path = TerminalShell.path.concat(pathstring.split("/"));
	}
	// deal with .. and .
	var cleanpath = [];
	for (var i in path) {
		if (path[i] == "..") {
			cleanpath.pop();
		} else if (path[i] != "." && ( path[i] != "" || i==0)) {
			cleanpath.push(path[i]);
		}
	}
	return cleanpath;
};

function setPrompt(path) {
	var pathstring = pathToString(path);
	Terminal.config.prompt = Terminal.config.sitename+":"+pathstring+"$ ";
	$('#prompt').html(Terminal.config.prompt);
}

function pathtoFile(path) {
	try {
	thisFile = TerminalShell.files;
	var l=path.length-1;
	for(var i=0; i<l; i++) {
		thisFile = thisFile[path[i]].contents;
	}
	thisFile = thisFile[path[i]];
	thisFile.path = path;
	return thisFile;
	} catch(err) {
		return 0;
	}
}


function getRandomInt(min, max) {
	// via https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random#Examples
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(items) {
	return items[getRandomInt(0, items.length-1)];
}



// Commands

// Core Commands

// `echo` command

TerminalShell.commands['echo'] = function(terminal) {
	var cmd_args = Array.prototype.slice.call(arguments);
	cmd_args.shift(); // terminal
	if (cmd_args.length == 0) {
		terminal.print('');
	} else {
		terminal.print(cmd_args.join(" "));
	}
}	


// `ls` command

TerminalShell.commands['ls'] = function(terminal) {
	var cmd_args = Array.prototype.slice.call(arguments);
	var showHidden = false;
	cmd_args.shift(); // terminal
	if (cmd_args.length == 0) {
		cmd_args.unshift(".");
	} else if (cmd_args[0] = '-a') {
		showHidden = true;
		cmd_args.shift();
		if (cmd_args.length == 0) {
			cmd_args.unshift(".");
		}
	}
	for (var a in cmd_args) {
		pathstring = cmd_args[a];
		path = stringToPath(pathstring);
		file = pathtoFile(path);
		var name_list = $('<ul>');
		if (file.type == 'dir') {
			$.each(file.contents, function(name, obj) {
				if (obj.type == 'dir') {
					name += '/';
				}
				if (name.search(/\./) != 0 || showHidden ) { 
					name_list.append($('<li>').text(name));
				}
			});
			terminal.print(name_list);	
		} else if (file == '0') {
			terminal.print('ls: '+pathstring+': No such file or directory');
		} else {
			terminal.print(pathstring);
		}
	}
};

// `cd` command 

TerminalShell.commands['cd'] = function(terminal, pathstring) {
	path = stringToPath(pathstring);
	file = pathtoFile(path);
	if (file.type == 'dir') {
		TerminalShell.cwd = file.contents;
		TerminalShell.path = path;
		setPrompt(path);
	} else {
		terminal.print('cd: '+pathstring+': No such file or directory');
	}
};

// `cat` command
TerminalShell.commands['cat'] = function(terminal){
	var cmd_args = Array.prototype.slice.call(arguments);
	cmd_args.shift(); // terminal
	if (cmd_args.length == 0) {
	// STDIN?
	}
	$.each(cmd_args, function(i, pathstring) {
		path = stringToPath(pathstring);
		file = pathtoFile(path);
		if (file.type == 'html' || file.type == 'txt') {
			url = file.url;
			contain = '<pre>';
			if ( file.type == 'html' ) {
				url = url + ' #page';
				contain = '<div>';
			}
			terminal.setWorking(true);
			var browser = $(contain).load(url, function() { 
				terminal.print(browser)});
			terminal.setWorking(false);
		}	else if (file.type = 'dir') {
			terminal.print('cat: '+pathstring+': Is a directory');
		}	else if (file == 0) {
			terminal.print('cat: '+pathstring+' No such file or directory');
		} else {
			terminal.print('cat: '+pathstring+': unsupported filetype');
		}
	});
}

// `history` command

TerminalShell.commands['history'] = function(terminal) {
		var history_list = $('<ul>');
		var l = terminal.history.length-1;
		for (var i=0; i<l; i++) {
			history_list.append($('<li>').text("  "+i+"  "+terminal.history[i]));
		}
		terminal.print(history_list);
}

// `login` command

TerminalShell.commands['login'] = function(terminal) {
	TerminalShell.files = Filesystem;
	TerminalShell.path = [''];
	TerminalShell.cwd = TerminalShell.files[''].contents;
	setPrompt(TerminalShell.path);
	TerminalShell.commands['cat'](terminal,'.david.txt');
	terminal.promptActive = true;
}

// Bash Expansions
//
// `!!` last command expansion
TerminalShell.filters.push(function (terminal, cmd) {
	if (/!!/.test(cmd)) {
		var newCommand = cmd.replace('!!', this.lastCommand);
		terminal.print(newCommand);
		return newCommand;
	} else {
		return cmd;
	}
});

// history expansion
TerminalShell.filters.push(function (terminal, cmd) {
	if (/!\d+/.test(cmd)) {
		var historyIndex = cmd.replace('!', '');
		var newCommand = terminal.history[historyIndex];
		terminal.print(newCommand);
		return newCommand;
	} else {
		return cmd;
	}
});

// Extensions
//
// `logout` command

TerminalShell.commands['logout'] = function(terminal) {
	terminal.print('[Process Completed]');
	$('#prompt, #cursor').hide();
	terminal.promptActive = false;
};

// `startx` command
//
TerminalShell.commands['startx'] = function(terminal) {
	terminal.print('Unable to locate waiting server');
	terminal.print('Starting X server...');
	terminal.promptActive = false;
	$('#prompt, #cursor').hide();
	setTimeout(function() { 
		$('#screen').fadeOut().queue(function(next) {
			window.location = Terminal.config.gui });
	});
}


// `display` command for displaying images inline

TerminalShell.commands['display'] = function(terminal) {
	var cmd_args = Array.prototype.slice.call(arguments);
	cmd_args.shift(); // terminal
	if (cmd_args.length == 0) {
		// Error?
	}
	$.each(cmd_args, function(i, pathstring) {
		path = stringToPath(pathstring);
		file = pathtoFile(path);
		if (file.type == 'img') {
			var frame = $('<div>')
			.addClass('imgframe')
			.append($('<img>')
					.attr('src', file.url).height("100%")
					.addClass('inline')
					.one('load', function() {
						terminal.setWorking(false);
					}));
			terminal.print(frame);
		} else if ( file == 0 && pathstring.search(/http/) != -1 ) {
			var image = $('<img>').attr('src', pathstring).addClass('inline');
			terminal.print(image);
		} else if ( file ==0 ) {
			terminal.print('display: '+pathstring+': No such file or directory');
		} else {
			terminal.print("display: "+pathstring+": Not a valid image file");
		}
	});
}	

// `wget` command for displaying webpages inline

TerminalShell.commands['wget'] = function(terminal, dest) {
	if (dest) {
		terminal.setWorking(true);
		var browser = $('<div>')
			.addClass('browser')
			.append($('<iframe>')
					.attr('src', dest).width("100%").height(600)
					.one('load', function() {
						terminal.setWorking(false);
					}));
		terminal.print(browser);
		return browser;
	} else {
		terminal.print("Please specify a URL.");
	}
};

// `pdfview` command for displaying pdfs 

TerminalShell.commands['pdfview'] = function(terminal) {
	var cmd_args = Array.prototype.slice.call(arguments);
	cmd_args.shift(); // terminal
	if (cmd_args.length == 0) {
		// Error?
	}
	$.each(cmd_args, function(i, pathstring) {
		path = stringToPath(pathstring);
		file = pathtoFile(path);
		if (file.type == 'pdf') {
			window.open(file.url);
		} else {
			terminal.print("pdfview: "+pathstring+": Not a valid PDF file");
		}
	});
}


var konamiCount = 0;
$(document).ready(function() {
	Terminal.promptActive = false;
	function noData() {
		Terminal.print($('<p>').addClass('error').text('Unable to load startup data. :-('));
		Terminal.promptActive = true;
	}


	$('#screen').bind('cli-load', function(e) { 
		TerminalShell.commands['login'](Terminal);
	});
	
	$(document).konami(function(){
		function shake(elems) {
			elems.css('position', 'relative');
			return window.setInterval(function() {
				elems.css({top:getRandomInt(-3, 3), left:getRandomInt(-3, 3)});
			}, 100);	
		}
		
		if (konamiCount == 0) {
			$('#screen').css('text-transform', 'uppercase');
		} else if (konamiCount == 1) {
			$('#screen').css('text-shadow', 'gray 0 0 2px');
		} else if (konamiCount == 2) {
			$('#screen').css('text-shadow', 'orangered 0 0 10px');
		} else if (konamiCount == 3) {
			shake($('#screen'));
		} else if (konamiCount == 4) {
			$('#screen').css('background', 'url(/files/img/over9000.png) center no-repeat');
		}
		
		$('<div>')
			.height('100%').width('100%')
			.css({background:'white', position:'absolute', top:0, left:0})
			.appendTo($('body'))
			.show()
			.fadeOut(1000);
		
		if (Terminal.buffer.substring(Terminal.buffer.length-2) == 'ba') {
			Terminal.buffer = Terminal.buffer.substring(0, Terminal.buffer.length-2);
			Terminal.updateInputDisplay();
		}
		TerminalShell.sudo = true;
		konamiCount += 1;
	});
});
