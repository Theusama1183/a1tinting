//pagination
document.addEventListener("DOMContentLoaded", function () {
  const postsPerPage = 15;
  let currentPage = 1;

  function showPosts(startIndex, endIndex) {
    const posts = document.querySelectorAll(".post");
    posts.forEach((post, index) => {
      if (index >= startIndex && index < endIndex) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  }

  function changePage(direction) {
    currentPage += direction;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = currentPage * postsPerPage;
    showPosts(startIndex, endIndex);
    updatePaginationNumbers();
  }

  function updatePaginationNumbers() {
    const totalPosts = document.querySelectorAll(".post").length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const pageNumbersContainer = document.getElementById("pageNumbers");
    pageNumbersContainer.innerHTML = "";

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        addPageButton(i);
      }
    } else {
      const currentPageIndex = currentPage - 1;
      if (currentPageIndex < 3) {
        for (let i = 1; i <= 5; i++) {
          addPageButton(i);
        }
        addEllipsis();
        addPageButton(totalPages);
      } else if (currentPageIndex >= totalPages - 3) {
        addPageButton(1);
        addEllipsis();
        for (let i = totalPages - 4; i <= totalPages; i++) {
          addPageButton(i);
        }
      } else {
        addPageButton(1);
        addEllipsis();
        for (let i = currentPageIndex - 1; i <= currentPageIndex + 1; i++) {
          addPageButton(i + 1);
        }
        addEllipsis();
        addPageButton(totalPages);
      }
    }
  }

  function addPageButton(pageNumber) {
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const pageNumberButton = document.createElement("button");
    pageNumberButton.classList.add("page-number");
    pageNumberButton.textContent = pageNumber;
    pageNumberButton.onclick = () => goToPage(pageNumber);
    pageNumbersContainer.appendChild(pageNumberButton);

    if (pageNumber === currentPage) {
      pageNumberButton.classList.add("active");
    }
  }

  function addEllipsis() {
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const ellipsisSpan = document.createElement("span");
    ellipsisSpan.textContent = "...";
    pageNumbersContainer.appendChild(ellipsisSpan);
  }

  function goToPage(pageNumber) {
    currentPage = pageNumber;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = currentPage * postsPerPage;
    showPosts(startIndex, endIndex);
    updatePaginationNumbers();
  }

  showPosts(0, postsPerPage);
  updatePaginationNumbers();
});
