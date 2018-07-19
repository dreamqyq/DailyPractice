$('#btn').on('click', function(e) {
  $('.popover').toggleClass('active')
  $(e.currentTarget).text('关闭浮层')
  if(!$('.popover').hasClass('active')){
    $('#btn').text('打开浮层')
  }

  setTimeout(function() {
    $(document).one('click', function() {
      $('.popover').removeClass('active')
      $('#btn').text('打开浮层')
    })
  }, 0)
})
$('.wrapper').on('click', function(e) {
  e.stopPropagation()
})
