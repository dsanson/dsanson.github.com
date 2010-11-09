$('#blog-title:contains("Philosophy")').html(function(i, h) {
  return h.replace(/Philosophy/g, '');
});
