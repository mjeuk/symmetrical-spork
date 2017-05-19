import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(selector, offset)
    {
        this.itemsToReveal = $(selector);
        this.hideInitially();
        this.createWaypoints(offset);
    }

    hideInitially()
    {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints(offset)
    {
        $.map(this.itemsToReveal, function(element)
        {
            function showElement()
            {
                $(element).addClass('reveal-item--is-visible');
            }
            new Waypoint({
                element: element,
                handler: showElement,
                offset: offset
            })
        })
    }
}

export default RevealOnScroll;
