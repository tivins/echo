document.addEventListener('DOMContentLoaded', () => {
    const variantSelect = document.querySelector('select[name="variant"]');
    const contextSelect = document.querySelector('select[name="context"]');
    const sizeSelect = document.querySelector('select[name="size"]');
    const button = document.querySelector('echo-button');
    const htmlCode = document.querySelector('#html-code');
    const disabledCheckbox = document.querySelector('input[name="disabled"]');
    const iconSelect = document.querySelector('select[name="icon"]');
    const iconPositionSelect = document.querySelector('select[name="icon-position"]');
    const iconSizeSelect = document.querySelector('select[name="icon-size"]');
    const iconVariantSelect = document.querySelector('select[name="icon-variant"]');
    const iconStrokeWidthInput = document.querySelector('input[name="icon-stroke-width"]');


    function updateHtmlCode() {
        const html = button.outerHTML;
        htmlCode.textContent = html;
    }

    variantSelect.addEventListener('change', () => {
        if (variantSelect.value === '') {
            button.removeAttribute('variant');
        } else {
            button.setAttribute('variant', variantSelect.value);
        }
        updateHtmlCode();
    });
    contextSelect.addEventListener('change', () => {
        if (contextSelect.value === '') {
            button.removeAttribute('context');
        } else {
            button.setAttribute('context', contextSelect.value);
        }
        updateHtmlCode();
    });
    sizeSelect.addEventListener('change', () => {
        if (sizeSelect.value === '') {
            button.removeAttribute('size');
        } else {
            button.setAttribute('size', sizeSelect.value);
        }
        updateHtmlCode();
    });
    disabledCheckbox.addEventListener('change', () => {
        if (disabledCheckbox.checked) {
            button.setAttribute('disabled', '');
        } else {
            button.removeAttribute('disabled');
        }
        updateHtmlCode();
    });
    iconSelect.addEventListener('change', () => {
        if (iconSelect.value === '') {
            button.removeAttribute('icon');
        } else {
            button.setAttribute('icon', iconSelect.value);
        }
        updateHtmlCode();
    });
    iconPositionSelect.addEventListener('change', () => {
        if (iconPositionSelect.value === '') {
            button.removeAttribute('icon-position');
        } else {
            button.setAttribute('icon-position', iconPositionSelect.value);
        }
        updateHtmlCode();
    });
    iconSizeSelect.addEventListener('change', () => {
        if (iconSizeSelect.value === '') {
            button.removeAttribute('icon-size');
        } else {
            button.setAttribute('icon-size', iconSizeSelect.value);
        }
        updateHtmlCode();
    });
    iconVariantSelect.addEventListener('change', () => {
        if (iconVariantSelect.value === '') {
            button.removeAttribute('icon-variant');
        } else {
            button.setAttribute('icon-variant', iconVariantSelect.value);
        }
        updateHtmlCode();
    });
    iconStrokeWidthInput.addEventListener('change', () => {
        if (iconStrokeWidthInput.value === '') {
            button.removeAttribute('icon-stroke-width');
        } else {
            button.setAttribute('icon-stroke-width', iconStrokeWidthInput.value);
        }
        updateHtmlCode();
    });
});