// Setup filesystem

Filesystem = {
	'': {
		type: 'dir',
		contents: {
		'.banner.txt' : {type:'txt',url:'/tty/banner.txt'},
		'.david.txt': 	{type:'txt',url:'/tty/david.txt'},
		'cv.markdown': 	{type:'txt',url:'/tty/cv.markdown'},
		'license.txt': 	{type:'txt',url:'/tty/license.txt'},
		'research': 	{type:'dir',url:'http://davidsanson.com/research',
			contents: {
				'arabicliar.pdf': 	{type: 'pdf',url:'http://files.davidsanson.com/research/arabicliar.pdf'},
				'dissertation.pdf': {type: 'pdf',url:'http://files.davidsanson.com/research/dissertation.pdf'},
			}
			}
		}}
	};

Filesystem[''].contents['web'] = webDir;

Filesystem[''].contents['photos'] = { type: 'dir', contents: {}};
imageDirectory = Filesystem[''].contents['photos'];



$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=40808145@N00&lang=en-us&format=json&tags=picforhomepage&jsoncallback=?", function(data){
  $.each(data.items, function(i,item){
	cleantitle = item.title.replace(/ /g, '_').replace(/\'/g,'').replace(/\"/g,'').toLowerCase();
	cleantitle = cleantitle+'.jpg';
	imglink = item.media.m.replace(/_m.jpg/, '_z.jpg');
	imageDirectory.contents[cleantitle] = {type:'img', url:imglink};
  });
});

