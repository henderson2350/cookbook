const followButtonHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/users/follow/${id}`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/myprofile');
      // console.log("good job");
    } else {
      alert("Failed to follow");
    }
  }
};

document
  .querySelector("#follow-button")
  .addEventListener("click", followButtonHandler);
