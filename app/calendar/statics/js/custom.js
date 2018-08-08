/**
 * Created by hardy on 2018/8/6.
 */
$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: Utils.getCurrentDate(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [],
        eventClick: function (event, jsEvent, view) {
            $('#eventId').text(event.id);
            $('#startDt').val(event.start.toISOString());
            $('#endDt').val(event.end.toISOString());
            $('#title').val(event.title);
        }
    });
    $.ajax('../data/data.json', {
        type: 'get',
        dataType: 'json',
        success: function (dataView) {
            $('#calendar').fullCalendar('renderEvents', dataView);
        }
    });
    $('#newEventId').text(Utils.getCurrentTime());

    $('#btnSave').click(function () {
        var formStartDt = $('#startDt').val();
        var formEndDt = $('#endDt').val();
        var eventId = $('#eventId').text();
        var title = $('#title').val();

        if (formStartDt && formEndDt && title) {
            var event
            if (eventId) {
                var events = $('#calendar').fullCalendar('clientEvents', eventId);
                event = events[0];
                event.start = formStartDt;
                event.end = formEndDt;
                event.title = title;
                $('#calendar').fullCalendar('updateEvent', event);
            } else {
                event = {};
                event.start = formStartDt;
                event.end = formEndDt;
                event.title = title;
                event.id = Utils.getCurrentTime();
                $('#calendar').fullCalendar('renderEvent', event);
            }
            // window.location.href = getHref();
            $('#backup').trigger('mouseover');
            $('#backup')[0].click();
        } else {
            alert('not be blank!');
        }

    });

    $('#btnReset').click(function () {
        $('#eventId').text('');
        // $('#startDt').val('');
        // $('#endDt').val('');
        $('#title').val('');
    });

    $('#btnDel').click(function () {
        var eventId = $('#eventId').text();
        if (eventId) {
            var events = $('#calendar').fullCalendar('clientEvents', eventId);
            if (events && events.length > 0) {
                $('#calendar').fullCalendar('removeEvents', eventId);
                $('#btnReset').click();
                $('#backup').trigger('mouseover');
                $('#backup')[0].click();
            }

        }
    });

    function backUpCalendarData() {
        var content = $('#calendar').fullCalendar('clientEvents', function () {
            return true;
        });
        var backupData = [];
        if (content && content.length > 0) {
            $.each(content, function (i, v) {
                backupData[i] = {
                    id: v.id,
                    start: v.start,
                    end: v.end,
                    title: v.title
                }
            });
        }
        var result;
        if (backupData.length > 0) {
            result = JSON.stringify(backupData);
        }
        return result;
    }

    function getHref() {
        var result = backUpCalendarData();
        var href;
        if (result) {
            href = "data:application/octet-stream;base64,"
                + Base64.encoder(result);
        }
        return href;
    }

    $('#backup').mouseover(function () {
        var href = getHref();
        if (href) {
            this.setAttribute("href", href);
        }
    });

    // // generates the HTML for a single event row
    // ListEventRenderer.prototype.fgSegHtml
});