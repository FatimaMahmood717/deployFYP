/*script>
      const wrapper = document.querySelector(".wrapper");
      const fileName = document.querySelector(".file-name");
      const defaultBtn = document.querySelector("#default-btn");
      const customBtn = document.querySelector("#custom-btn");
      const cancelBtn = document.querySelector("#cancel-btn i");
      const img = document.querySelector("img");
      let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
      function defaultBtnActive(){
        defaultBtn.click();
      }
      defaultBtn.addEventListener("change", function(){
        const file = this.files[0];
        if(file){
          const reader = new FileReader();
          reader.onload = function(){
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
          }
          cancelBtn.addEventListener("click", function(){
            img.src = "";
            wrapper.classList.remove("active");
          })
          reader.readAsDataURL(file);
        }
        if(this.value){
          let valueStore = this.value.match(regExp);
          fileName.textContent = valueStore;
        }
      });
    </script>*/
   /* document.getElementById("files").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};*/
/*$("#fileUpload").on('change', function () {

     //Get count of selected files
     var countFiles = $(this)[0].files.length;

     var imgPath = $(this)[0].value;
     var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
     var image_holder = $("#image-holder");
     image_holder.empty();

     if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
         if (typeof (FileReader) != "undefined") {

             //loop for each file selected for uploaded.
             for (var i = 0; i < countFiles; i++) {

                 var reader = new FileReader();
                 reader.onload = function (e) {
                     $("<img />", {
                         "src": e.target.result,
                             "class": "thumb-image"
                     }).appendTo(image_holder);
                 }

                 image_holder.show();
                 reader.readAsDataURL($(this)[0].files[i]);
             }

         } else {
             alert("This browser does not support FileReader.");
         }
     } else {
         alert("Pls select only images");
     }*/