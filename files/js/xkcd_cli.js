function pathFilename(path) {
	var match = /\/([^\/]+)$/.exec(path);
	if (match) {
		return match[1];
	}
}

function getRandomInt(min, max) {
	// via https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random#Examples
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(items) {
	return items[getRandomInt(0, items.length-1)];
}

TerminalShell.commands['sudo'] = function(terminal) {
	var cmd_args = Array.prototype.slice.call(arguments);
	cmd_args.shift(); // terminal
	if (cmd_args.join(' ') == 'make me a sandwich') {
		terminal.print('Okay.');
	} else {
		var cmd_name = cmd_args.shift();
		cmd_args.unshift(terminal);
		cmd_args.push('sudo');
		if (TerminalShell.commands.hasOwnProperty(cmd_name)) {
			this.sudo = true;
			this.commands[cmd_name].apply(this, cmd_args);
			delete this.sudo;
		} else if (!cmd_name) {
			terminal.print('sudo what?');
		} else {
			terminal.print('sudo: '+cmd_name+': command not found');
		}
	}
};

TerminalShell.filters.push(function (terminal, cmd) {
	if (/!!/.test(cmd)) {
		var newCommand = cmd.replace('!!', this.lastCommand);
		terminal.print(newCommand);
		return newCommand;
	} else {
		return cmd;
	}
});

TerminalShell.commands['shutdown'] = TerminalShell.commands['poweroff'] = function(terminal) {
	if (this.sudo) {
		terminal.print('Broadcast message from davidsanson.com');
		terminal.print();
		terminal.print('The system is going down for maintenance NOW!');
		return $('#screen').fadeOut();
	} else {
		terminal.print('Must be root.');
	}
};

TerminalShell.commands['logout'] =
TerminalShell.commands['exit'] = 
TerminalShell.commands['quit'] = function(terminal) {
	terminal.print('Bye.');
	$('#prompt, #cursor').hide();
	terminal.promptActive = false;
};

TerminalShell.commands['restart'] = TerminalShell.commands['reboot'] = function(terminal) {
	if (this.sudo) {
		TerminalShell.commands['poweroff'](terminal).queue(function(next) {
			window.location.reload();
		});
	} else {
		terminal.print('Must be root.');
	}
};

function linkFile(url) {
	return {type:'dir', enter:function() {
		window.location = url;
	}};
}

Filesystem = {
    'banner.txt': {type:'file', read:function(terminal) {
		terminal.print('    /            /                                          ');
		terminal.print(' __/ __. , _o __/ _   __.  ____  _   __ ____   _. __ ______ ');
		terminal.print('(_/_(_/|_\\/<_(_/_/_)_(_/|_/ / <_/_)_(_)/ / <_o(__(_)/ / / <_');
		terminal.print();
        terminal.print('Use "ls", "cat", and "cd" to navigate the filesystem.');
    }},
	'license.txt': {type:'file', read:function(terminal) {
		terminal.print($('<p>').html('Client-side logic for Wordpress CLI theme :: <a href="http://thrind.xamai.ca/">R. McFarland, 2006, 2007, 2008</a>'));
		terminal.print($('<p>').html('jQuery rewrite and overhaul :: <a href="http://www.chromakode.com/">Chromakode, 2010</a>'));
		terminal.print();
		$.each([
			'This program is free software; you can redistribute it and/or',
			'modify it under the terms of the GNU General Public License',
			'as published by the Free Software Foundation; either version 2',
			'of the License, or (at your option) any later version.',
			'',
			'This program is distributed in the hope that it will be useful,',
			'but WITHOUT ANY WARRANTY; without even the implied warranty of',
			'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the',
			'GNU General Public License for more details.',
			'',
			'You should have received a copy of the GNU General Public License',
			'along with this program; if not, write to the Free Software',
			'Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.'
		], function(num, line) {
			terminal.print(line);
		});
	}},
	'david.jpg': {type:'image', read:function(terminal) {
		$.each([
'               -hmMNMmNMmhNmNmhMMMMmoo               ',
'             :shmMMMy`:+//. :hhm+smNMh               ',
'            `+Mdhyhh:`         .  -/dMMd/            ',
'           `mMmhs+//.               `/hmMy+.         ',
'        ::.mMh+. -.                     -dNNms       ',
'       `yMMNo-```                    `    :MMN:      ',
'       -NMs`                         `    `NMMo      ',
'       yMMo                                :NNh      ',
'       hMs`        `:-.`      `--:/:.       /MM-     ',
'       `oh       `/ydddh+. `-+dNMMMMN+      .NMd`    ',
'         y+     `hNNNmmmmdddmNNMMNNMMMs     `mMM-    ',
'          /     +NNdhs++++shs//-.``.omMh`   .my.     ',
'          `/   -my.      `dNNo` `.:::sNM+   os       ',
'           s-  oNy/+oo+/+hMMMMNdhdNMMMMMh `+N+       ',
'           /o  oMMMMMMMMNMMMMMMMMMMMMMMMM+yNMm-      ',
'           `do`:MMMMMMMmdyooo+hMNMMMMMMMMMMMMo`      ',
'            oMmhMMMMMNmmm+` -hdMMMMMMMMMMMMN-        ',
'             dMNMMMMNmmhddhysmMNmmNMMMMMMM-`         ',
'              hhMMNNmd:`-::://o++::mMMMMMh           ',
'                NMMmmh/sddysssdNNNhmNMMMM+           ',
'                +NMmyy//+/---/shddmmNNNMd            ',
'                 -yy/+ydmmmmhdNNMMMmmddo             ',
'                   ::..//..:``-ohyo+o:               ',
'                     .`                              '
			], function(num, line) {
			terminal.print(line);
		});
	}},

	'cv.txt': {type:'file', read:function(terminal) {
	    $.each([
		    '  --------------------------- --------------------------',
            '  Department of Philosophy                  614-292-2235',
            '  The Ohio State University           <sanson.7@osu.edu>',
            '  372 University Hall           <http://davidsanson.com>',
            '  230 North Oval Mall                                   ',
            '  Columbus, Ohio 43210                                  ',
            '  --------------------------- --------------------------',
            '',
            '# Employment',
            '',
            '-   Assistant Professor, The Ohio State University, 2005--present.',
            '',
            '# Education',
            '',
            '-   Ph.D., Philosophy, UCLA, 2005.',
            '    -   Dissertation: *Being and Time: The Metaphysics of Past and',
            '        Future in a Dynamic World*',
            '    -   Committee: Calvin Normore (chair), David Kaplan, Terry Parsons,',
            '        Philippe Schlenker',
            '',
            '-   M.A., Philosophy, UCLA, 2003.',
            '-   B.A., Philosophy, Reed College, 1996.',
            '    -   Thesis: "Intending to Act"',
            '    -   Supervisor: Mark Hinchliff',
            '',
            '# Area of Specialization',
            '',
            '-   Metaphysics',
            '',
            '# Areas of Competence',
            '',
            '-   Philosophy of Language, Medieval Philosophy, Ancient Philosophy,',
            '    Logic',
            '',
            '# Publications',
            '',
            '-   "Presentism and Truthmaking," with Ben Caplan, *Philosophy Compass*,',
            '    forthcoming.',
            '-   "The Way Things Were," with Ben Caplan, *Philosophy and',
            '    Phenomenological Research* (81.1) 2010: 24–39.',
            '-   "The Early Arabic Liar," with Ahmed Alwishah, *Vivarium* (47:1)',
            '    2009: 97-127.',
            '',
            '# Presentations',
            '',
            '-   "Locality and Necessity," with Ben Caplan, APA Pacific Meeting,',
            '    March 2008',
            '-   "The Essentially Unreal Past," APA Central Meeting, April 2007',
            '    (invited)',
            '-   "Fatalism and Future Contingents," OSU Undergraduate Philosophy',
            '    Club, November 2005',
            '-   "The Way Things Were," with Ben Caplan',
            '    -   CPA Annual Congress, University of Western Ontario, May 2005',
            '        (refereed)',
            '    -   APA Central Division Meeting, Chicago, IL, April 2005 (refereed)',
            '    -   8th Annual INPC, University of Idaho and WSU, April 2005',
            '        (refereed)',
            '',
            '-   "The Once Present and the Now Past"',
            '    -   University of Rochester, February 2005 (invited)',
            '    -   University of Manitoba, January 2005 (invited)',
            '    -   Ohio State University, January 2005 (invited)',
            '',
            '# Comments',
            '',
            '-   "Comments on Dana Goswick, \'Counterfactual Analysis & Causal',
            '    Overdetermination,\'" APA Pacific Meeting, March 2006.',
            '-   "Comments on Marie Pannier, \'Presentism and Singular Propositions,\'"',
            '    WCPA Meeting, October 2005.',
            '-   "Comments on Kelly Trogdon, \'Dualism, Mental Causation, and',
            '    Counterfactuals,\'" APA Pacific Meeting, March 2003.',
            '',
            '# Teaching',
            '',
            '## Graduate Seminars',
            '',
            '-   Dissertation Seminar (Spring 2011)',
            '-   Tense and Passage (Winter 2010)',
            '-   Nonexistents (Fall 2007)',
            '-   Time and Change (Spring 2006)',
            '-   First Year Proseminar (Fall 2008)',
            '',
            '## Undergraduate Courses',
            '',
            '-   Philosophy 670: Advanced Topics in Philosophy of Religion (Fall',
            '    2010)',
            '-   Philosophy 663: Advanced Metaphysics (Winter 2009)',
            '-   Philosophy 463: Introduction to Metaphysics (Winter 2010, Winter',
            '    2007)',
            '-   Philosophy 302: Introduction to Medieval Philosophy (Fall 2008, Fall',
            '    2007, Spring 2007, Winter 2006)',
            '-   Philosophy 301: Introduction to Ancient Philosophy (Fall 2010, Fall',
            '    2009, Winter 2009, Winter 2008, Winter 2007)',
            '-   Philosophy 250: Symbolic Logic (Spring 2011, Winter 2008)',
            '-   Philosophy 150: Informal Logic (Winter 2006)',
            '-   Philosophy H101: Introduction to Philosophy, Honors (Fall 2009,',
            '    Spring 2006)',
            '-   Philosophy 101: Introduction to Philosophy (Spring 2007)',
            '-   Philosophy C119: Topics in Early Modern Philosophy (UCLA, Summer',
            '    2003)',
            '-   Philosophy 31: Symbolic Logic (UCLA, Summer 2001)',
            '',
            '# Awards and Grants',
            '',
            '-   UCLA Dissertation Year Fellowship, 2004-2005.',
            '-   UCLA Distinguished Teaching Assistant Award, 2004.',
            '-   Robert M. Yost Prize for Excellence in Teaching, UCLA Philosophy',
            '    Department, 2000.',
            '-   UCLA Department of Philosophy Fellowship, 1996-97.',
            '',
            '# Refereeing',
            '',
            '-   *American Philosophical Quarterly*',
            '-   *Australasian Journal of Philosophy*',
            '-   *Pacific Philosophical Quarterly*',
            '-   *Philosophical Studies*',
            '',
            '# Departmental Service',
            '',
            '-   Colloquium Committee, 2005-present',
            '-   Salary Commitee, 2009-10',
            '-   Hiring Committee, 2008-09',
            '-   Undergraduate Committee, 2008-09, 2005-06',
            '-   Bingham Committee, 2008-09',
            '-   Research Committee, 2007-08',
            '-   Executive Committee, 2006-07',
            '-   Curriculum Committee, 2005-06',
            '-   Fink Committee, 2005-06',
            '',
            '# Supervision',
            '',
            '## Dissertation Committee Member',
            '',
            '### Current',
            '    ',
            '-   James McGlothlin, 2011-present.',
            '-   Wesley Cray, 2009-present',
            '-   Cathy Muller, 2008-present',
            '-   Eric Carter, 2007-present',
            '',
            '### Completed',
            '',
            '-   Vassilis Tsompanidis, *Tensed Belief* (UC Santa Barbara), 2008-2010.',
            '',
            '## Graduate Qualifying Exam Committee Member',
            '',
            '-   Scott Brown, 2011',
            '-   James McGlothlin, 2011',
            '-   Wesley Cray, 2009',
            '-   Patrick Reeder, 2009',
            '-   Cathy Muller, 2008',
            '',
            '## Graduate Candidacy Exam Committee Member',
            '',
            '-   David Blanks, 2011',
            '-   Ben Horne, 2011',
            '-   Scott Brown, 2010',
            '-   Daniel Pearlberg, 2009',
            '-   Conrad Robinson, 2009',
            '-   Wesley Cray, 2008',
            '-   Andrew Choi, 2007',
            '-   Thomas Evans, 2007',
            '-   Cathy Muller, 2007',
            '',
            '## Undergraduate Honors Thesis Committee Member',
            '',
            '-   Ben Flowers, "Rule A and Responsibility: A Defense of the',
            '    Compatibility of Moral Responsibility and Causal Determinism,"',
            '    2009',
            '-   Matthew Grover (Psychology), "Using attitude formation towards',
            '    novel stimuli to predict changes in depressive symptoms," 2009',
            '',
            '# Other Service',
            '',
            '-   Session Chair: Central APA, 2010; Central APA, 2009; Pacific APA,',
            '    2006.',
            '-   Oberlin, external examiner',
            '    -   Rachel Randall, "The Ethics of Creation of Persons," BA Honors',
            '        Thesis, Defended December 2007',
            '    -   Michael Siniscalchi, "Can Representationalism Bridge Levine\'s',
            '        Gap?" BA Honors Thesis, Defended December 2007'
	    ], function(num, line) {
			terminal.print(line);
		});
	}}
};
Filesystem['courses'] = linkFile('http://www.davidsanson.com/courses');
Filesystem['research'] = linkFile('http://www.davidsanson.com/research');
Filesystem['gizmos'] = linkFile('http://www.davidsanson.com/gizmos');
Filesystem['me'] = linkFile('http://www.davidsanson.com/me');
TerminalShell.pwd = Filesystem;

TerminalShell.commands['cd'] = function(terminal, path) {
	if (path in this.pwd) {
		if (this.pwd[path].type == 'dir') {
			this.pwd[path].enter(terminal);
		} else if (this.pwd[path].type == 'file') {
			terminal.print('cd: '+path+': Not a directory');
		}
	} else {
		terminal.print('cd: '+path+': No such file or directory');
	}
};

TerminalShell.commands['dir'] =
TerminalShell.commands['ls'] = function(terminal, path) {
	var name_list = $('<ul>');
	$.each(this.pwd, function(name, obj) {
		if (obj.type == 'dir') {
			name += '/';
		}
		name_list.append($('<li>').text(name));
	});
	terminal.print(name_list);
};

TerminalShell.commands['cat'] = function(terminal, path) {
	if (path in this.pwd) {
		if (this.pwd[path].type == 'file') {
			this.pwd[path].read(terminal);
		} else if (this.pwd[path].type == 'dir') {
			terminal.print('cat: '+path+': Is a directory');
		} else if (this.pwd[path].type == 'image') {
			terminal.print('cat: '+path+': Is an image');
		} else {
		terminal.print('You\'re a kitty!');
		}
	}
};

TerminalShell.commands['open'] = TerminalShell.commands['feh'] = TerminalShell.commands['aview'] = TerminalShell.commands['xv'] = TerminalShell.commands['gqview'] = TerminalShell.commands['xzgv'] = function(terminal, path) {
	if (path in this.pwd) {
		if (this.pwd[path].type == 'image') {
			this.pwd[path].read(terminal);
		} else
			terminal.print('Unsupported filetype.');
	}
}

TerminalShell.commands['login'] = function(terminal) {
	this.pwd['david.jpg'].read(terminal);
	this.pwd['banner.txt'].read(terminal);
}


TerminalShell.commands['rm'] = function(terminal, flags, path) {
	if (flags && flags[0] != '-') {
		path = flags;
	}
	if (!path) {
		terminal.print('rm: missing operand');
	} else if (path in this.pwd) {
		if (this.pwd[path].type == 'file') {
			delete this.pwd[path];
		} else if (this.pwd[path].type == 'dir') {
			if (/r/.test(flags)) {
				delete this.pwd[path];
			} else {
				terminal.print('rm: cannot remove '+path+': Is a directory');
			}
		}
	} else if (flags == '-rf' && path == '/') {
		if (this.sudo) {
			TerminalShell.commands = {};
		} else {
			terminal.print('rm: cannot remove /: Permission denied');
		}
	}
};

TerminalShell.commands['cheat'] = function(terminal) {
	terminal.print($('<a>').text('*** FREE SHIPPING ENABLED ***').attr('href', 'http://store.xkcd.com/'));
}; 

TerminalShell.commands['wget'] = TerminalShell.commands['curl'] = function(terminal, dest) {
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


TerminalShell.commands['write'] =
TerminalShell.commands['irc'] = function(terminal, nick) {
	if (nick) {
		$('.irc').slideUp('fast', function() {
			$(this).remove();
		});
		var url = "http://widget.mibbit.com/?server=irc.foonetic.net&channel=%23";
		if (nick) {
			url += "&nick=" + encodeURIComponent(nick);
		}
		TerminalShell.commands['curl'](terminal, url).addClass('irc');
	} else {
		terminal.print('usage: irc <nick>');
	}
};

TerminalShell.commands['who'] = function(terminal, nick) {
	terminal.print('david    tty01   Jun 18 23:11');
	terminal.print('lewis    tty02   Oct 22 03:10');
	terminal.print('hazel    tty04   Jan 01 18:02');
}

TerminalShell.commands['finger'] = function(terminal, nick) {
	if (nick == 'david') {
		 terminal.print('Login: david                            Name: David Sanson');
		 terminal.print('Directory: /Users/david                 Shell: /usr/bash');
		 terminal.print('Last login Wed Jun 16 14:54 1992 (EDT) on ttys000');
		 terminal.print('New mail.');
		 terminal.print('No Plan.');
	} else if (nick == 'lewis') {
		 terminal.print('Login: lewis                            Name: Lewis Thornburgh');
		 terminal.print('Directory: /Users/greenchicken          Shell: /usr/korn');
		 terminal.print('On since Sat Oct 22 1:34 1998 (EDT) on tty02');
		 terminal.print('No mail.');
		 terminal.print('Plan: Destroy all that stand in my way.');
	} else if (nick == 'hazel') {
		 terminal.print('Login: hazel                            Name: Hazel Sanson');
		 terminal.print('Directory: /Users/hazel                 Shell: /usr/ruby');
		 terminal.print('On since Sat Apr 03 8:03 2007 (EDT) on tty02');
		 terminal.print('New mail.');
		 terminal.print('Plan: Finish preschool.');

	} else {
		 terminal.print('Mmmmmm...');
	}
};

TerminalShell.commands['apt-get'] = function(terminal, subcmd) {
	if (!this.sudo && (subcmd in {'update':true, 'upgrade':true, 'dist-upgrade':true})) {
		terminal.print('E: Unable to lock the administration directory, are you root?');
	} else {
		if (subcmd == 'update') {
			terminal.print('Reading package lists... Done');
		} else if (subcmd == 'upgrade') {
			if (($.browser.name == 'msie') || ($.browser.name == 'firefox' && $.browser.versionX < 3)) {
				terminal.print($('<p>').append($('<a>').attr('href', 'http://abetterbrowser.org/').text('To complete installation, click here.')));
			} else {
				terminal.print('This looks pretty good to me.');
			}
		} else if (subcmd == 'dist-upgrade') {
			var longNames = {'win':'Windows', 'mac':'OS X', 'linux':'Linux'};
			var name = $.os.name;
			if (name in longNames) {
				name = longNames[name];
			} else {
				name = 'something fancy';
			}
			terminal.print('You are already running '+name+'.');
		} else if (subcmd == 'moo') {
			terminal.print('        (__)');
			terminal.print('        (oo)');
			terminal.print('  /------\\/ ');
			terminal.print(' / |    ||  ');
			terminal.print('*  /\\---/\\  ');
			terminal.print('   ~~   ~~  '); 
			terminal.print('...."Have you mooed today?"...');
		} else if (!subcmd) {
			terminal.print('This APT has Super Cow Powers.');
		} else {
			terminal.print('E: Invalid operation '+subcmd);
		}
	}
};

function oneLiner(terminal, msg, msgmap) {
	if (msgmap.hasOwnProperty(msg)) {
		terminal.print(msgmap[msg]);
		return true;
	} else {
		return false;
	}
}

TerminalShell.commands['man'] = function(terminal, what) {
	pages = {
		'last': 'Man, last night was AWESOME.',
		'help': 'Man, help me out here.',
		'next': 'Request confirmed; you will be reincarnated as a man next.',
		'cat':  'You are now riding a half-man half-cat.'
	};
	if (!oneLiner(terminal, what, pages)) {
		terminal.print('Oh, I\'m sure you can figure it out.');
	}
};

TerminalShell.commands['locate'] = function(terminal, what) {
	keywords = {
		'ninja': 'Ninja can not be found!',
		'keys': 'Have you checked your coat pocket?',
		'joke': 'Joke found on user.',
		'problem': 'Problem exists between keyboard and chair.',
		'raptor': 'BEHIND YOU!!!'
	};
	if (!oneLiner(terminal, what, keywords)) {
		terminal.print('Locate what?');
	}
};

Adventure = {
	rooms: {
		0:{description:'You are at a computer using unixkcd.', exits:{west:1, south:10}},
		1:{description:'Life is peaceful there.', exits:{east:0, west:2}},
		2:{description:'In the open air.', exits:{east:1, west:3}},
		3:{description:'Where the skies are blue.', exits:{east:2, west:4}},
		4:{description:'This is what we\'re gonna do.', exits:{east:3, west:5}},
		5:{description:'Sun in wintertime.', exits:{east:4, west:6}},
		6:{description:'We will do just fine.', exits:{east:5, west:7}},
		7:{description:'Where the skies are blue.', exits:{east:6, west:8}},
		8:{description:'This is what we\'re gonna do.', exits:{east:7}},
		10:{description:'A dark hallway.', exits:{north:0, south:11}, enter:function(terminal) {
				if (!Adventure.status.lamp) {
					terminal.print('You are eaten by a grue.');
					Adventure.status.alive = false;
					Adventure.goTo(terminal, 666);
				}
			}
		},
		11:{description:'Bed. This is where you sleep.', exits:{north:10}},
		666:{description:'You\'re dead!'}
	},
	
	status: {
		alive: true,
		lamp: false
	},
	
	goTo: function(terminal, id) {
		Adventure.location = Adventure.rooms[id];
		Adventure.look(terminal);
		if (Adventure.location.enter) {
			Adventure.location.enter(terminal);
		}
	}
};
Adventure.location = Adventure.rooms[0];

TerminalShell.commands['look'] = Adventure.look = function(terminal) {
	terminal.print(Adventure.location.description);	
	if (Adventure.location.exits) {
		terminal.print();
		
		var possibleDirections = [];
		$.each(Adventure.location.exits, function(name, id) {
			possibleDirections.push(name);
		});
		terminal.print('Exits: '+possibleDirections.join(', '));
	}
};

TerminalShell.commands['go'] = Adventure.go = function(terminal, direction) {
	if (Adventure.location.exits && direction in Adventure.location.exits) {
		Adventure.goTo(terminal, Adventure.location.exits[direction]);
	} else if (!direction) {
		terminal.print('Go where?');
	} else if (direction == 'down') {
		terminal.print("On our first date?");
	} else {
		terminal.print('You cannot go '+direction+'.');
	}
};

TerminalShell.commands['light'] = function(terminal, what) {
	if (what == "lamp") {
		if (!Adventure.status.lamp) {
			terminal.print('You set your lamp ablaze.');
			Adventure.status.lamp = true;
		} else {
			terminal.print('Your lamp is already lit!');
		}
	} else {
		terminal.print('Light what?');
	}
};

TerminalShell.commands['sleep'] = function(terminal, duration) {
	duration = Number(duration);
	if (!duration) {
		duration = 5;
	}
	terminal.setWorking(true);
	terminal.print("You take a nap.");
	$('#screen').fadeOut(1000);
	window.setTimeout(function() {
		terminal.setWorking(false);
		$('#screen').fadeIn();
		terminal.print("You awake refreshed.");
	}, 1000*duration);
};

// No peeking!
TerminalShell.commands['help'] = TerminalShell.commands['halp'] = function(terminal) {
	terminal.print('That would be cheating!');
}; 

TerminalShell.fallback = function(terminal, cmd) {
	oneliners = {
		'make me a sandwich': 'What? Make it yourself.',
		'make love': 'I put on my robe and wizard hat.',
		'i read the source code': '<3',
		'pwd': 'You are in a maze of twisty passages, all alike.',
		'lpr': 'PC LOAD LETTER',
		'hello joshua': 'How about a nice game of Global Thermonuclear War?',
		'xyzzy': 'Nothing happens.',
		'date': 'March 32nd',
		'hello': 'Why hello there!',
		'david': 'Yes?',
		'su': 'God mode activated. Remember, with great power comes great ... aw, screw it, go have fun.',
		'fuck': 'I have a headache.',
		'whoami': 'You are Richard Stallman.',
		'nano': 'Seriously? Why don\'t you just use Notepad.exe? Or MS Paint?',
		'top': 'It\'s up there --^',
		'moo':'moo',
		'ping': 'There is another submarine three miles ahead, bearing 225, forty fathoms down.',
		'find': 'What do you want to find? Kitten would be nice.',
		'hello':'Hello.','more':'Oh, yes! More! More!',
		'your gay': 'Keep your hands off it!',
		'hi':'Hi.','echo': 'Echo ... echo ... echo ...',
		'bash': 'You bash your head against the wall. It\'s not very effective.','ssh': 'ssh, this is a library.',
		'uname': 'Illudium Q-36 Explosive Space Modulator',
		'kill': 'Terminator deployed to 1984.',
		'use the force luke': 'I believe you mean source.',
		'use the source luke': 'I\'m not luke, you\'re luke!',
		'serenity': 'You can\'t take the sky from me.',
		'enable time travel': 'TARDIS error: Time Lord missing.',
		'ed': 'You are not a diety.'
	};
	oneliners['emacs'] = 'You should really use vim.';
	oneliners['vi'] = oneliners['vim'] = 'You should really use emacs.';
	
	cmd = cmd.toLowerCase();
	if (!oneLiner(terminal, cmd, oneliners)) {
		if (cmd == "asl" || cmd == "a/s/l") {
			terminal.print(randomChoice([
				'2/AMD64/Server Rack',
				'328/M/Transylvania',
				'6/M/Battle School',
				'48/M/The White House',
				'7/F/Rapture',
				'Exactly your age/A gender you\'re attracted to/Far far away.',
				'7,831/F/Lothlórien',
				'42/M/FBI Field Office'
			]));
		} else if  (cmd == "hint") {
			terminal.print(randomChoice([
 				'Use the source, Luke!',
 				'There are cheat codes.'
 			]));
		} else if (cmd == 'find kitten') {
			terminal.print($('<iframe width="800" height="600" src="http://www.robotfindskitten.net/rfk.swf"></iframe>'));
		} else if (cmd == 'time travel') {
			xkcdDisplay(terminal, 630);
		} else if (/:\(\)\s*{\s*:\s*\|\s*:\s*&\s*}\s*;\s*:/.test(cmd)) {
			Terminal.setWorking(true);
		} else {
			$.get("/unixkcd/missing", {cmd: cmd});
			return false;
		}
	}
	return true;
};

var konamiCount = 0;
$(document).ready(function() {
	Terminal.promptActive = false;
	function noData() {
		Terminal.print($('<p>').addClass('error').text('Unable to load startup data. :-('));
		Terminal.promptActive = true;
	}
	
	$('#screen').bind('cli-load', function(e) { 
		Terminal.runCommand('login');
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
