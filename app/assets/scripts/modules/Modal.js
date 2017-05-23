import $ from 'jquery';

class Modal {
    constructor()
    {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');

        this.events();
    }

    events()
    {
        //clicking the openModalButton
        this.openModalButton.click(this.openModal.bind(this));
        //clicking the closeModalButton
        this.closeModalButton.click(this.closeModal.bind(this));
        //pressing esc key
        $(document).keyup((evt) => {
            if (evt.keyCode === 27)
            {
                this.closeModal.call(this, evt);
            }
        });

    }

    openModal(evt)
    {
        evt.preventDefault();
        this.modal.addClass('modal--is-visible');
    }

    closeModal(evt)
    {
        evt.preventDefault();
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;
