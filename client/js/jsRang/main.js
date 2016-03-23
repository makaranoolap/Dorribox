var myarr;

myarr = [
  {
    id: 1,
    startValue: 480,
    endValue: 720,
    color: "#CF1920",
    startAt: "2015-03-22 00:00",
    endAt: "2015-03-22 23:59"
  }, {
    id: 2,
    startValue: 810,
    endValue: 950,
    startAt: "2015-03-22 00:00",
    endAt: "2015-03-22 23:59"
  }
];

jQuery(function() {
  var renderLabel;
  renderLabel = function(ui, customContent) {
    var content, endAt, range, startAt;
    if (customContent == null) {
      customContent = false;
    }
    range = ui.range;
    startAt = moment(range.startAt, "YYYY-MM-DD h:mm").add(range.startValue, "minutes");
    endAt = moment(range.startAt, "YYYY-MM-DD h:mm").add(range.endValue, "minutes");
    content = "" + (startAt.format("YYYY-MM-DD h:mm")) + " -- " + (endAt.format("YYYY-MM-DD h:mm"));
    if (customContent) {
      content = jQuery("<div style='left: -40px;position: absolute;'>" + (startAt.format("YYYY-MM-DD h:mm")) + "</div><div style='right: -40px;position: absolute;'>" + (endAt.format("YYYY-MM-DD h:mm")) + "</div>");
    }
    return content;
  };
  jQuery('#slider-range').rangeSlider({
    min: 0,
    max: 1440,
    ranges: myarr
  });
  jQuery('#slider-range-timer').rangeSlider({
    min: 0,
    max: 1440,
    ranges: myarr,
    rangeSlide: function(event, ui) {
      return jQuery("#display-timer").empty().append(renderLabel(ui));
    }
  });
  return jQuery('#slider-range-custom-label').rangeSlider({
    min: 0,
    max: 1440,
    ranges: myarr,
    rangeLabel: function(event, ui) {
      return ui.label.empty().append(renderLabel(ui, true));
    },
    rangeSlide: function(event, ui) {
      return jQuery("#display-label-timer").empty().append(renderLabel(ui));
    }
  });
});
