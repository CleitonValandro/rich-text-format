//Html rendering - #rich-text-format
var htmlRichText = '<!-- Main menu --> <div class="top-menu">             <ul>                 <li class="iten-bold">                     <a class="icon-link bold-click">                         <img class="icon icon-bold" src="images/icons/icon-bold.png" alt="Icon for bold">                     </a>                 </li>                 <li class="iten-italic">                     <a class="icon-link italic-click">                         <img class="icon icon-italic" src="images/icons/icon-italic.png" alt="Icon for italic">                     </a>                 </li>                 <li class="iten-underlined">                     <a class="icon-link underlined-click">                         <img class="icon icon-underlined" src="images/icons/icon-underlined.png" alt="Icon for underlined">                     </a>                 </li>                 <li class="iten-justify-left">                     <a class="icon-link justify-left-click">                         <img class="icon icon-justify-left" src="images/icons/icon_fustify_left.png" alt="Icon for justify left">                     </a>                 </li>                 <li class="iten-justify-center">                     <a class="icon-link justify-center-click">                         <img class="icon icon-juntify-center" src="images/icons/icon_fustify_center.png" alt="Icon for justify center">                     </a>                 </li>                 <li class="iten-justify-right">                     <a class="icon-link justify-right-click">                         <img class="icon icon-juntify-right" src="images/icons/icon_fustify_right.png" alt="Icon for justify right">                     </a>                 </li>                 <li class="iten-order-list">                     <a class="icon-link order-list-click">                         <img class="icon icon-order-list" src="images/icons/icon_order_list.png" alt="Icon for order list">                     </a>                 </li>                 <li class="iten-unordered-list">                     <a class="icon-link unordered-list-click">                         <img class="icon icon-unordered-list" src="images/icons/icon_unordered_list.png" alt="Icon for unordered-list">                     </a>                 </li>                 <li class="iten-code">                     <a class="icon-link code-click">                         <img class="icon icon-code" src="images/icons/icon-code.png" alt="Icon for code">                     </a>                 </li>              </ul>         </div>         <!-- Editable content or text -->         <div class="text-editor" contenteditable="true"></div>         <textarea class="text-code"></textarea>';
document.getElementById("rich-text-format").innerHTML = htmlRichText;

var selectorTextEditor = document.querySelector('#rich-text-format .text-editor');
var seletorCode = document.querySelector('#rich-text-format .text-code');
var vectorClass = ['bold', 'italic', 'underlined', 'justify-left', 'justify-center', 'order-list', 'justify-right', 'unordered-list']
var richText = '#rich-text-format ';

// Click event on all buttons and calling the method that performs the editing on the texts
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

// Insertion of editions in the text
function editText(value) {
    document.execCommand(value);
}

// Make visible the option to edit via HTML
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

// Disables icons when HTML editor is enabled
function disabledIcons() {
    vectorClass.forEach(element => {
        var selector = document.querySelector(richText + '.' + element + '-click');
        selector.style.opacity = '0.5';
        selector.classList.add('not-active');
    });
}

// Enables icons when HTML editor is disabled
function enabledIcons() {
    vectorClass.forEach(element => {
        var selector = document.querySelector(richText + '.' + element + '-click');
        selector.style.opacity = '1';
        selector.classList.remove('not-active');
    });
}

function rich_text_format(value) {
    if (value == "retun-text") {
        return seletorCode.value;
    }
}