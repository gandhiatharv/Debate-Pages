document.addEventListener('DOMContentLoaded', function () {
    // Initialize Quill editors
    var editors = [];
    for (var i = 1; i <= 6; i++) {
        var editor = new Quill('#editor' + i, {
            theme: 'snow',
        });
        editors.push(editor);
    }

    // Function to change the active tab
    window.changeTab = function (tabIndex) {
        for (var i = 1; i <= 6; i++) {
            var tab = document.getElementById('tab' + i);
            var editor = document.getElementById('editor' + i);

            if (i === tabIndex) {
                tab.style.backgroundColor = '#ddd';
                editor.style.display = 'block';
            } else {
                tab.style.backgroundColor = '#eee';
                editor.style.display = 'none';
            }
        }
    };
    window.addEventListener('beforeunload', function (e) {
        var confirmationMessage = 'Are you sure you want to leave the page? Your changes may not be saved.';
        e.returnValue = confirmationMessage; // Standard for most browsers
        return confirmationMessage; // For some older browsers
    });
});
