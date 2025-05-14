
    function openEditModal() {
      document.getElementById("edit-name").value = document.getElementById("user-name").innerText;
      document.getElementById("edit-email").value = document.getElementById("user-email").innerText;
      document.getElementById("edit-about").value = document.getElementById("user-about").innerText;
      document.getElementById("edit-modal").classList.remove("hidden");
    }

    function closeEditModal() {
      document.getElementById("edit-modal").classList.add("hidden");
    }

    function saveEdit() {
      const name = document.getElementById("edit-name").value;
      const email = document.getElementById("edit-email").value;
      const about = document.getElementById("edit-about").value;


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Comfirm"
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById("user-name").innerText = name;
          document.getElementById("user-email").innerText = email;
          document.getElementById("user-about").innerText = about;
          Swal.fire({
            title: "Edit Profile info",
            text: "Update profile info successfullty",
            icon: "success"
          });
        }
      });

      closeEditModal();
    }


    function openTransactionSidebar() {
      document.getElementById("transaction-sidebar").classList.remove("translate-x-full");
    }

    function closeTransactionSidebar() {
      document.getElementById("transaction-sidebar").classList.add("translate-x-full");
    }

 