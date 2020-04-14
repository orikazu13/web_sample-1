

window.onload = function(){
  $('#calendar').fullCalendar({
    header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},

    height: window.innerHeight - 100,
    windowResize: function () {
      $('#calendar').fullCalendar('option', 'height', window.innerHeight - 100);
    },
		lang: "ja",
		selectable: true,
		selectHelper: true,
		navLinks: true,
		select: function(start, end) {
			var title = prompt("予定タイトル:");
			var eventData;
			if (title) {
				eventData = {
				title: title,
				start: start,
				end: end
			};
			$('#calendar').fullCalendar('renderEvent', eventData, true);
			}
			$('#calendar').fullCalendar('unselect');
		},
    eventDblClick:function(event, jsEvent){
			var title = prompt('予定を入力してください:', event.title);
			if(title && title!=""){
				event.title = title;
				calendar.fullCalendar('updateEvent', event); //イベント（予定）の修正
			}else{
				calendar.fullCalendar("removeEvents", event.id); //イベント（予定）の削除
			}
  	},
		editable: true,
		eventLimit: true,
	});
}
