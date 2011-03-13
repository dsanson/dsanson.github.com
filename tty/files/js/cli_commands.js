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
	for (i in path) {
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
	thisFile = TerminalShell.files;
	var l=path.length-1;
	for(i=0; i<l; i++) {
		thisFile = thisFile[path[i]].contents;
	}
	thisFile = thisFile[path[i]];
	thisFile.path = path;
	return thisFile;
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

// `ls` command

TerminalShell.commands['ls'] = function(terminal, path) {
	var name_list = $('<ul>');
	$.each(this.cwd, function(name, obj) {
		if (obj.type == 'dir') {
			name += '/';
		}
		name_list.append($('<li>').text(name));
	});
	terminal.print(name_list);
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
		terminal.print('cd: '+pathstring+' not a directory');
	}
};



// `cat` command

TerminalShell.commands['cat'] = function(terminal, pathstring) {
	path = stringToPath(pathstring);
	file = pathtoFile(path);
	if (file.type == 'txt') {
		url = "/"+Terminal.config.clidir+pathToString(path);
		terminal.print(url);
		terminal.setWorking(true);
		var browser = $('<pre>').addClass('new').load(url, function() { 
			terminal.print(browser).jumpToBottom()});
			terminal.setWorking(false);
	}
	else {
		terminal.print('cat: '+path+' unsupported filetype');
	}
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

// Extensions

// `login` command

TerminalShell.commands['login'] = function(terminal) {
	TerminalShell.path = [''];
	TerminalShell.cwd = TerminalShell.files[''].contents;
	setPrompt(TerminalShell.path);
	terminal.promptActive = true;

//	TerminalShell.commands['cat'](terminal, 'david.txt');
//		TerminalShell.commands['cat'](terminal, 'banner.txt');
}


// `logout` command

TerminalShell.commands['logout'] = function(terminal) {
	terminal.print('[Process Completed]');
	$('#prompt, #cursor').hide();
	terminal.promptActive = false;
	setTimeout(function(){
		window.location = redirect;
	},4000);
};

// `display` command for displaying images inline

TerminalShell.commands['display'] = function(terminal, dest) {
	if (dest) {
		if (dest in this.pwd && this.pwd[dest].type == 'img') {
			dest = this.pwd[dest].url
		}
		var image = $('<img>').attr('src', dest);
		terminal.print(image);
		return image;
	} else {
		terminal.print("Please specify an image file or URL.");
	}
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
