swal({ 
    showCancelButton: true, cancelButtonColor:'#4CAF50', cancelButtonText: 'No',
      background:'#FF6B6B',    title: `Restore Previously Marked Checkboxes?`, text: "", 
      type: 'info', confirmButtonColor:'#0047AB',
       imageSize: "306x220", confirmButtonText: "Yes"},    function(isConfirm) {
        if (isConfirm) {
          // User clicked the "Yes" button
          loadProgress();
          saveProgress();
        }});  

 