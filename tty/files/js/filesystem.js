// Setup filesystem

Filesystem = {
	'': {
		type: 'dir',
		contents: {
		'.banner.txt' : {type:'txt',url:'/tty/banner.txt'},
		'.david.txt': 	{type:'txt',url:'/tty/david.txt'},
		'cli-license.txt': 	{type:'txt',url:'/tty/license.txt'},
		}}
	};

PDFs = { type: 'dir', contents: {
  'arabic-liar.pdf': { type: 'pdf', url: 'http://files.davidsanson.com/research/arabic-liar.pdf'},
  'dissertation.pdf': { type: 'pdf', url: 'http://files.davidsanson.com/research/dissertation.pdf'},
  'maximal-possibilities.pdf': { type: 'pdf', url: 'http://files.davidsanson.com/research/maximal-possibilities.pdf'},
  'once-present.pdf': { type: 'pdf', url: 'http://files.davidsanson.com/research/once-present.pdf'},
  'presentism-and-truthmaking.pdf': { type: 'pdf', url: 'http://files.davidsanson.com/research/presentism-and-truthmaking.pdf'},
  'way-things-were.pdf': { type: 'pdf', url: 'http://files.davidsanson.com/research/way-things-were.pdf'},
}}


webDir.contents['research'].contents['pdfs'] = PDFs
$.extend(Filesystem[''].contents, webDir.contents);

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

