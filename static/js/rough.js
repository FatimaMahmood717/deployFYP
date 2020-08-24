/* choose file*/
<script type="text/javascript">
Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);
</script>

/*preview image*/
<script>
        const inpFile = document.getElementById("inpFile");
         const previewContainer = document.getElementById("imagePreview");
          const previewImage = previewContainer.querySelector(".image-preview__image");
           const previewDefaultText = previewContainer.querySelector("image-preview__default-text");

           inpFile.addEventListener("change", function(){
           const file = this.files[0];

           if(file){
           const reader = new FileReader();

           previewDefaultText.style.display ="none";
            previewImage.style.display ="block";

            reader.addEventListener("load" , function(){
            console.log(this);
            previewImage.setAttribute("src", this.result);
            });
            reader.readAsDefault(file);
           }
           }):

      </script>
//////////////////////////////////////////////