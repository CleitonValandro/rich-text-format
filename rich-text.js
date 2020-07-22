var selectorTextEditor = document.querySelector('#rich-text-format .text-editor');
var seletorCode = document.querySelector('#rich-text-format .text-code');
var vectorClass = ['bold', 'italic', 'underlined', 'justify-left', 'justify-center', 'order-list', 'justify-right', 'unordered-list']
var richText = '#rich-text-format ';

document.querySelector(richText + '.bold-click').onclick = function() {
    editText('bold');
}
document.querySelector(richText + '.italic-click').onclick = function() {
    editText('italic');
}
document.querySelector(richText + '.underlined-click').onclick = function() {
    editText('underline');
}
document.querySelector(richText + '.justify-left-click').onclick = function() {
    editText('JustifyLeft');
}
document.querySelector(richText + '.justify-center-click').onclick = function() {
    editText('JustifyCenter');
}
document.querySelector(richText + '.justify-right-click').onclick = function() {
    editText('JustifyRight');
}
document.querySelector(richText + '.order-list-click').onclick = function() {
    editText('insertorderedlist');
}
document.querySelector(richText + '.unordered-list-click').onclick = function() {
    editText('insertUnorderedList');
}
document.querySelector(richText + '.code-click').onclick = function() {
    editCodeEditor();
}

function editText(value) {
    document.execCommand(value);
}

function setColor(value) {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, value);
}

function editCodeEditor() {
    if (selectorTextEditor.style.display == 'none') {
        selectorTextEditor.innerHTML = seletorCode.value;
        selectorTextEditor.style.display = 'block';
        seletorCode.style.display = 'none';
        enabledIcons();
    } else {
        seletorCode.value = selectorTextEditor.innerHTML;
        selectorTextEditor.style.display = 'none';
        seletorCode.style.display = 'block';
        disabledIcons();
    }
}

function disabledIcons() {
    vectorClass.forEach(element => {
        var selector = document.querySelector(richText + '.' + element + '-click');
        selector.style.opacity = '0.5';
        selector.classList.add('not-active');
    });
}

function enabledIcons() {
    vectorClass.forEach(element => {
        var selector = document.querySelector(richText + '.' + element + '-click');
        selector.style.opacity = '1';
        selector.classList.remove('not-active');
    });
}