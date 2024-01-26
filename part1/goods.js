const goods = [
    {
      title: "Car1",
      text: "Some text about car 1",
      image:
        "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
      price: "10.000$",
    },
    {
      title: "Car2",
      text: "Some text about car 2",
      image:
        "https://img.freepik.com/premium-photo/black-dodge-charger-car-with-burning-fire-background_853645-14159.jpg",
      price: undefined,
    },
    {
      title: "Car3",
      text: "Some text about car 3",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
  
    {
      title: "Car4",
      text: "Some text about car 1",
      image:
        "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
      price: "10.000$",
    },
    {
      title: "Car5",
      text: "Some text about car 2",
      image:
        "https://img.freepik.com/premium-photo/black-dodge-charger-car-with-burning-fire-background_853645-14159.jpg",
      price: undefined,
    },
    {
      title: "Car6",
      text: "Some text about car 3",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
  
    {
      title: "Car7",
      text: "Some text about car 1",
      image:
        "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
      price: "10.000$",
    },
    {
      title: "Car8",
      text: "Some text about car 2",
      image:
        "https://img.freepik.com/premium-photo/black-dodge-charger-car-with-burning-fire-background_853645-14159.jpg",
      price: undefined,
    },
    {
      title: "Car9",
      text: "Some text about car 3",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car10",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car11",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car12",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car11",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car11",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car11",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car11",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
    {
      title: "Car11",
      text: "Some text about car 10",
      image:
        "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
      price: "11.000$",
    },
  ];
  
  const pagesQuantity =
    goods.length % 3 ? Math.ceil(goods.length / 3) : goods.length / 3;
  
  const goodsContainer = document.getElementById("goods");
  
  const paginationPrev = document.getElementById("pagination-prev");
  const paginationNext = document.getElementById("pagination-next");
  
  const paginationRenderItem = document.getElementById("pagination-render-items");
  
  const pagination = {
    currentPage: 1,
    paginationButtons: [],
    currentElements: goods.slice(0, 3),
    changePage: function (newPageNumber) {
      this.currentPage = newPageNumber;
  
      this.currentElements = goods.slice(
        this.currentPage * 3 - 3,
        this.currentPage * 3
      );
  
      this.paginationButtons.forEach((button) =>
        button.classList.remove("active")
      );
      this.paginationButtons[this.currentPage - 1].classList.add("active");
  
      this.renderPageElements();
    },
    renderPaginationButtons: function (pagesQuantity) {
      paginationRenderItem.innerHTML = "";
  
      for (let i = 0; i < pagesQuantity; i++) {
        paginationRenderItem.innerHTML += `
        <li class="page-item pagination-number ${i === 0 ? "active" : ""}">
          <span class="page-link">${i + 1}</span>
        </li>
        `;
      }
  
      this.paginationButtons = [
        ...document.getElementsByClassName("pagination-number"),
      ];
  
      this.paginationButtons.forEach((button, i) => {
        button.onclick = () => {
          pagination.changePage(i + 1);
        };
      });
    },
    renderPageElements: function () {
      // clean up prev elements
      goodsContainer.innerHTML = "";
  
      this.currentElements.forEach((good) => {
        const { title, text, image, price } = good;
        goodsContainer.innerHTML += `
              <div class="card w-50 m-3">
              <img src="${image}" class="card-img-top"
               style="height: 350px; 
                      filter: ${price ? "none;" : "grayscale(100%);"}
                      object-fit: cover;" 
              />
                  <div class="card-body">
                      <h4 class="card-title">${title}</h4>
                      <p class="card-text">${text}</p>
                      <button class="btn 
                       ${price ? "btn-success" : "btn-secondary"}"
                       ${!price ? "disabled" : ""}
                       >${price ? "Buy for" : "Not available"}</button>
                  </div>
              </div>
              `;
      });
    },
  };
  
  pagination.renderPageElements();
  pagination.renderPaginationButtons(pagesQuantity);
  
  paginationPrev.onclick = () => {
    const { currentPage, changePage } = pagination;

    // Check if the current page is greater than 1 before decrementing
    if (currentPage > 1) {
        pagination.changePage(currentPage - 1); // Corrected this line
    }
};
  
  paginationNext.onclick = () => {
    const { currentPage, paginationButtons } = pagination;
  
    // borders of greater values (currentPage)
    pagination.currentPage =
      currentPage + 1 > paginationButtons.length
        ? paginationButtons.length
        : currentPage + 1;
  
    pagination.changePage(pagination.currentPage);
  };