// Addibg the variables
const inputActivity = document.getElementById("input-activity");
const btnAddActivity = document.getElementById("add-activity");
const activityContent = document.getElementById("activity-content");
const deleteAll = document.querySelector(".delete-all");

// console.log(inputActivity, btnAddActivity, activityContent);

// Logic for the add button
btnAddActivity.addEventListener("click", () => {
  //creating the div for new activity
  let activity = document.createElement("div");
  activity.classList.add("activity");

  //creating the li of new activity name and appending it to the div
  let newActivity = document.createElement("li");
  newActivity.innerText = `${inputActivity.value}`;
  activity.appendChild(newActivity);

  // creating a completed button and appending it to the div
  let completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedBtn.classList.add("activity-completed");
  activity.appendChild(completedBtn);

  // creating a delete button and appending it to the div

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.classList.add("activity-deleted");
  activity.appendChild(deleteBtn);

  if (inputActivity.value === "") {
    alert(
      `Space can't be left empty, please input in an activity to continue.`
    );
  } else {
    activityContent.appendChild(activity);
  }

  inputActivity.value = "";

  completedBtn.addEventListener("click", () => {
    newActivity.style.backgroundColor = "green";
    newActivity.style.color = "white";
  });
  deleteBtn.addEventListener("click", () => {
    // let Isaac = e.target;
    // Isaac.parentElement.parentElement.remove();
    activity.remove();
  });
});

deleteAll.addEventListener("click", () => {
  activityContent.remove();
  if (deleteAll.classList.contains()) {
    deleteAll.style.backgroundColor = "blue";
  } else {
    deleteAll.style.backgroundColor = "green";
  }
});
