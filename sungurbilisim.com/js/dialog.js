 var dialog = document.querySelector('.dialog');
    var showDialogButton = document.querySelector('#iletisim');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
     var dialog1 = document.querySelector('.dialogekip');
    var showDialogButton = document.querySelector('#ekip');
    if (! dialog1.showModal) {
      dialogPolyfill.registerDialog(dialog1);
    }
    showDialogButton.addEventListener('click', function() {
      dialog1.showModal();
    });
    dialog1.querySelector('.close').addEventListener('click', function() {
      dialog1.close();
    });