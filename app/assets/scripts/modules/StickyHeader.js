import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor()
    {
        this.siteHeader = $('.site-header');
        this.headerTrigger = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.links = $('.primary-nav__link');

        this.createHeaderWaypoint();
        this.createSectionWaypoints();
        this.links.smoothScroll();
    }

    createHeaderWaypoint()
    {
        new Waypoint({
            element: this.headerTrigger[0],
            handler: (direction) => {
                this.siteHeader.toggleClass('site-header--dark', direction === 'down');
            }
        })
    }

    createSectionWaypoints()
    {
        let links = this.links;

        $.map(this.pageSections, (element) =>
        {
            return new Waypoint({
                element: element,
                handler: function()
                {
                    let active = document.getElementById(`${element.id}-link`);

                    links.removeClass('primary-nav__link--active');
                    $(active).addClass('primary-nav__link--active');

                }
            })
        })

        $(links).on('click', (evt) =>
        {
            let section = evt.target.id.replace('-link', '');
        })
    }
}

export default StickyHeader;
