// Setup filesystem

Filesystem = {
	'': {
		type: 'dir',
		contents: {
		'cv.markdown': {type:'txt',url:'cv.markdown'},
		'david.jpg'	 : {type:'img',url:'http://farm1.static.flickr.com/198/513039293_500a4e9fd9_m.jpg'},
		'david.txt': {type:'txt'},
		'license.txt': {type:'txt'},
		'research': {type:'dir',url:'http://davidsanson.com/research',contents: {
			'arabicliar.pdf': {type: 'pdf',url:'http://files.davidsanson.com/research/arabicliar.pdf'},
			'dissertation.pdf': {type: 'pdf',url:'http://files.davidsanson.com/research/dissertation.pdf'},
			'more': {type: 'dir',contents: {
				'test': {type: 'txt'}
				}
			}
		}}}
	}
};

TerminalShell.files = Filesystem;

