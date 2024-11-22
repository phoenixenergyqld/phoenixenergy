(
  <script>
    function toggleDescription(id){" "}
    {
      // Hide all descriptions
      document.querySelectorAll(".description").forEach((desc) => {
        desc.classList.add("hidden");
      })
    }
    ; // Toggle visibility for the clicked description const selectedDesc =
    document.getElementById(`${id}-desc`); if
    (selectedDesc.classList.contains('hidden')){" "}
    {selectedDesc.classList.remove("hidden")};
    selectedDesc.classList.add('visible'); } else{" "}
    {selectedDesc.classList.add("hidden")};
    selectedDesc.classList.remove('visible'); } }
  </script>
),
  (
    <script>
      document.addEventListener("DOMContentLoaded", function () {}
      const images = document.querySelectorAll(".clickable-image"); const
      contentBox = document.getElementById("content-box"); const dynamicContent
      = document.getElementById("dynamic-content"); images.forEach((image) =>{" "}
      {image.addEventListener("click", function () {
        const content = image.getAttribute("data-content");
        dynamicContent.textContent = content;
        contentBox.scrollIntoView({ behavior: "smooth" });
      })}
      ; }); });
    </script>
  );
