import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(selector, offset)
    {
        this.itemsToReveal = $(selector);
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially()
    {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints()
    {
        $.map(this.itemsToReveal, (element) =>
        {
            function showElement()
            {
                $(element).addClass('reveal-item--is-visible');
            }

            new Waypoint({
                element: element,
                handler: showElement,
                offset: this.offset
            })
        })
    }
}

export default RevealOnScroll;
