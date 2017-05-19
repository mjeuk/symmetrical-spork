import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor()
    {
        this.siteHeader = $('.site-header');
        this.headerTrigger = $('.large-hero__title');
        this.createHeaderWaypoint();
    }

    createHeaderWaypoint()
    {
        new Waypoint({
            element: this.headerTrigger[0],
            handler: (newDirection) => {
                let direction;

                if (direction !== newDirection)
                {
                    this.siteHeader.toggleClass('site-header--dark');
                    direction = newDirection;
                }
            }
        })
    }
}

export default StickyHeader;
